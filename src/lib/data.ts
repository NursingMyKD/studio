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
