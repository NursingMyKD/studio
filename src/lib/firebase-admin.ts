// src/lib/firebase-admin.ts
import admin from 'firebase-admin';
import { getFirestore as getAdminFirestore } from 'firebase-admin/firestore';
import type { ContentItem } from '@/types/content';

const PROJECT_ROOT = process.cwd();

if (!admin.apps.length) {
  try {
    if (process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY && process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL) {
      admin.initializeApp({
        credential: admin.credential.cert({
          projectId: process.env.FIREBASE_PROJECT_ID,
          clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
          privateKey: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\\\n/g, '\n'),
        }),
      });
      // console.log('Firebase Admin SDK initialized using environment variables.');
    } else {
      const serviceAccount = require(`${PROJECT_ROOT}/serviceAccountKey.json`);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
      // console.log('Firebase Admin SDK initialized using local serviceAccountKey.json.');
    }
  } catch (error: any) {
    if (error.code === 'app/duplicate-app') {
      // console.warn('Firebase Admin SDK already initialized.');
    } else if (error.code === 'MODULE_NOT_FOUND' && error.message.includes('serviceAccountKey.json')) {
      console.error('Firebase Admin SDK initialization error: serviceAccountKey.json not found in project root, and Firebase Admin environment variables are not set.');
      console.error('For local development, place serviceAccountKey.json in the project root. For production, set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY environment variables.');
    } else {
      console.error('Firebase Admin SDK initialization error:', error);
    }
  }
}

const adminDb = getAdminFirestore();

export async function searchContent(query: string): Promise<ContentItem[]> {
  if (!query.trim()) {
    return [];
  }
  const lowercasedQuery = query.toLowerCase();
  // Note: Firestore's default querying capabilities are limited for full-text search.
  // This basic implementation fetches all documents and filters them in memory.
  // For larger datasets, a dedicated search solution like Algolia, Elasticsearch,
  // or Firestore's new Vector Search (if applicable to your needs) would be more performant.
  const contentCollection = adminDb.collection('content');
  const snapshot = await contentCollection.get();

  if (snapshot.empty) {
    return [];
  }

  const results: ContentItem[] = [];
  snapshot.forEach(doc => {
    const data = doc.data() as ContentItem;
    if (
      data.title.toLowerCase().includes(lowercasedQuery) ||
      data.summary.toLowerCase().includes(lowercasedQuery) ||
      (data.keywordsForImage && data.keywordsForImage.toLowerCase().includes(lowercasedQuery)) ||
      data.categoryType.toLowerCase().includes(lowercasedQuery)
    ) {
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

export async function getBookmarkedContent(contentIds: string[]): Promise<ContentItem[]> {
  if (!contentIds || contentIds.length === 0) {
    return [];
  }
  const contentCollection = adminDb.collection('content');
  // Firestore 'in' query supports up to 30 equality clauses.
  // If more IDs are needed, multiple queries would be required.
  const MAX_IDS_PER_QUERY = 30;
  const results: ContentItem[] = [];

  for (let i = 0; i < contentIds.length; i += MAX_IDS_PER_QUERY) {
    const chunkOfIds = contentIds.slice(i, i + MAX_IDS_PER_QUERY);
    if (chunkOfIds.length > 0) {
      const snapshot = await contentCollection.where(admin.firestore.FieldPath.documentId(), 'in', chunkOfIds).get();
      snapshot.forEach(doc => {
        results.push({ ...(doc.data() as ContentItem), id: doc.id });
      });
    }
  }
  // Preserve original order if necessary (Firestore doesn't guarantee order for 'in' queries)
  return results.sort((a, b) => contentIds.indexOf(a.id) - contentIds.indexOf(b.id));
}

