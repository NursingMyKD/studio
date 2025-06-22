import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";

export async function getUserBookmarks(userId: string) {
  if (!userId) {
    return [];
  }

  const bookmarksRef = collection(db, `users/${userId}/bookmarks`);
  const q = query(bookmarksRef);
  const querySnapshot = await getDocs(q);

  const bookmarks = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return bookmarks;
}

export async function getBodySystems() {
  // TODO: Replace with real data fetching logic
  // Example static data:
  return [
    {
      id: 'cardiovascular',
      slug: 'cardiovascular',
      title: 'Cardiovascular System',
      summary: 'Learn about the heart and blood vessels.',
      generalOverview: '',
      inDepthConsiderations: '',
      categoryType: 'Body System' as const, // Use 'as const' for correct type
    },
    {
      id: 'respiratory',
      slug: 'respiratory',
      title: 'Respiratory System',
      summary: 'Explore the lungs, airways, and breathing mechanics.',
      generalOverview: '',
      inDepthConsiderations: '',
      categoryType: 'Body System' as const,
    },
    {
      id: 'neurological',
      slug: 'neurological',
      title: 'Neurological System',
      summary: 'Understand the brain, spinal cord, and nerves.',
      generalOverview: '',
      inDepthConsiderations: '',
      categoryType: 'Body System' as const,
    },
    {
      id: 'renal',
      slug: 'renal',
      title: 'Renal System',
      summary: 'Delve into the kidneys and urinary system functions.',
      generalOverview: '',
      inDepthConsiderations: '',
      categoryType: 'Body System' as const,
    },
    {
      id: 'gastrointestinal',
      slug: 'gastrointestinal',
      title: 'Gastrointestinal System',
      summary: 'Learn about the digestive organs and processes.',
      generalOverview: '',
      inDepthConsiderations: '',
      categoryType: 'Body System' as const,
    },
  ];
}
