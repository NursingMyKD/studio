import { adminDb } from './firebase-admin';
import type { ContentItem } from '@/types/content';

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

export async function getContentItemBySlug(slug: string): Promise<ContentItem | null> {
    const contentCollectionRef = adminDb.collection('content').where('slug', '==', slug);
    const querySnapshot = await contentCollectionRef.limit(1).get();

    if (querySnapshot.empty) {
        return null;
    }
    const doc = querySnapshot.docs[0];
    return { ...(doc.data() as ContentItem), id: doc.id };
}

export async function getContentItemsBySlugs(slugs: string[]): Promise<ContentItem[]> {
    if (!slugs || slugs.length === 0) {
        return [];
    }
    const contentCollectionRef = adminDb.collection('content').where('slug', 'in', slugs);
    const querySnapshot = await contentCollectionRef.get();

    if (querySnapshot.empty) {
        return [];
    }
    const items: ContentItem[] = [];
    querySnapshot.forEach(doc => {
        items.push({ ...(doc.data() as ContentItem), id: doc.id });
    });
    return items;
}

export async function getBookmarkedContent(bookmarkedSlugs: string[]): Promise<ContentItem[]> {
    if (bookmarkedSlugs.length === 0) {
        return [];
    }
    return getContentItemsBySlugs(bookmarkedSlugs);
}
