// src/lib/firebase-admin.ts
import admin from 'firebase-admin';
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore';
import type { ContentItem } from '@/types/content';
import fs from 'fs';
import path from 'path';

if (!admin.apps.length) {
  try {
    // Try to initialize with environment variables (for production/deployment)
    if (process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY && process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          // Ensure private key newlines are correctly formatted
          privateKey: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\\\n/g, '\\n'),
        }),
      });
      // console.log('Firebase Admin SDK initialized using environment variables.');
    } else {
      // Fallback to local serviceAccountKey.json (for local development)
      const serviceAccountPath = path.resolve(process.cwd(), 'serviceAccountKey.json');
      if (fs.existsSync(serviceAccountPath)) {
        const serviceAccountFile = fs.readFileSync(serviceAccountPath, 'utf8');
        const serviceAccount = JSON.parse(serviceAccountFile);
        admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
        });
        // console.log('Firebase Admin SDK initialized using local serviceAccountKey.json.');
      } else {
        console.error('Firebase Admin SDK initialization error: serviceAccountKey.json not found in project root, and Firebase Admin environment variables are not fully set.');
        console.error('For local development, place serviceAccountKey.json in the project root. For production, set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY environment variables.');
        // Optionally, throw an error here or handle it as appropriate for your application
        // throw new Error('Failed to initialize Firebase Admin SDK: Missing credentials.');
      }
    }
  } catch (error: any) {
    if (error.code === 'app/duplicate-app') {
      // This can happen with hot-reloading in development. Usually safe to ignore.
      // console.warn('Firebase Admin SDK already initialized or duplicate initialization attempt.');
    } else {
      console.error('Firebase Admin SDK initialization error:', error);
      // throw error; // Re-throw if you want to halt execution on other errors
    }
  }
}

const adminDb = getAdminFirestore();

export async function searchContent(query: string): Promise<ContentItem[]> {
  if (!query.trim()) {
    return [];
  }
  const lowercasedQuery = query.toLowerCase();
  const contentCollection = adminDb.collection('content');
  const snapshot = await contentCollection.get();

  if (snapshot.empty) {
    return [];
  }

  const results: ContentItem[] = [];
  snapshot.forEach(doc => {
    const data = doc.data() as ContentItem;
    // Ensure all searchable fields exist before trying to access them
    const titleMatch = data.title && data.title.toLowerCase().includes(lowercasedQuery);
    const summaryMatch = data.summary && data.summary.toLowerCase().includes(lowercasedQuery);
    const keywordsMatch = data.keywordsForImage && data.keywordsForImage.toLowerCase().includes(lowercasedQuery);
    const categoryMatch = data.categoryType && data.categoryType.toLowerCase().includes(lowercasedQuery);

    if (titleMatch || summaryMatch || keywordsMatch || categoryMatch) {
      results.push({ ...data, id: doc.id });
    }
  });

  return results;
}

export async function getAllContentItems(): Promise<ContentItem[]> {
  const contentCollection = adminDb.collection('content');
  const snapshot = await contentCollection.get();

  if (snapshot.empty) {
    return [];
  }
  const items: ContentItem[] = [];
  snapshot.forEach(doc => {
    items.push({ ...(doc.data() as ContentItem), id: doc.id });
  });
  return items;
}

export async function getContentByCategory(category: string, limitCount?: number): Promise<ContentItem[]> {
    const contentCollectionRef = adminDb.collection('content').where('categoryType', '==', category);
    let querySnapshot;
    if (limitCount) {
        querySnapshot = await contentCollectionRef.limit(limitCount).get();
    } else {
        querySnapshot = await contentCollectionRef.get();
    }

    if (querySnapshot.empty) {
        return [];
    }
    const items: ContentItem[] = [];
    querySnapshot.forEach(doc => {
        items.push({ ...(doc.data() as ContentItem), id: doc.id });
    });
    return items;
}

export async function getContentItemBySlug(slug: string): Promise<ContentItem | undefined> {
  if (!slug) {
    return undefined;
  }
  try {
    const docRef = adminDb.collection('content').doc(slug);
    const docSnap = await docRef.get();

    if (docSnap.exists) {
      return { ...(docSnap.data() as ContentItem), id: docSnap.id };
    } else {
      console.warn(`Content item with slug "${slug}" not found.`);
      return undefined;
    }
  } catch (error) {
    console.error('Error fetching content item by slug:', slug, error);
    return undefined;
  }
}

export async function getBookmarkedContent(contentIds: string[]): Promise<ContentItem[]> {
  if (!contentIds || contentIds.length === 0) {
    return [];
  }
  const contentCollection = adminDb.collection('content');
  const MAX_IDS_PER_QUERY = 30; // Firestore 'in' query limit is 30
  const results: ContentItem[] = [];

  // Process IDs in chunks to stay within Firestore limits
  for (let i = 0; i < contentIds.length; i += MAX_IDS_PER_QUERY) {
    const chunkOfIds = contentIds.slice(i, i + MAX_IDS_PER_QUERY);
    if (chunkOfIds.length === 0) {
      continue;
    }
    try {
      const query = contentCollection.where(admin.firestore.FieldPath.documentId(), 'in', chunkOfIds);
      const snapshot = await query.get();

      snapshot.forEach(doc => {
        results.push({ ...(doc.data() as ContentItem), id: doc.id });
      });
    } catch (error) {
      console.error('Error fetching bookmarked content chunk:', chunkOfIds, error);
      // Decide if you want to skip this chunk or halt
    }
  }
  return results;
}

export async function getContentItemsBySlugs(slugs: string[]): Promise<ContentItem[]> {
  if (!slugs || slugs.length === 0) {
    return [];
  }

  const contentRef = adminDb.collection('content');
  const batches = [];
  // Firestore 'in' queries can handle up to 30 items. Batching for safety.
  for (let i = 0; i < slugs.length; i += 10) {
    const batchSlugs = slugs.slice(i, i + 10);
    batches.push(
      contentRef.where('slug', 'in', batchSlugs).get()
    );
  }

  const results = await Promise.all(batches);
  const items: ContentItem[] = [];
  results.forEach(snapshot => {
    snapshot.docs.forEach(doc => {
      items.push({ id: doc.id, ...doc.data() } as ContentItem);
    });
  });

  return items;
}

export function initFirebaseAdmin() {
  // This file already ensures initialization at the top, so this is a no-op for compatibility
  return;
}

export async function verifyIdToken(token: string) {
  return admin.auth().verifyIdToken(token);
}

