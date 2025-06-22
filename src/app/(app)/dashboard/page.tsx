import { getUserBookmarks } from "@/lib/data";
import { getContentByCategory } from "@/lib/firebase-admin";
import { currentUser } from "@clerk/nextjs/server";
import DashboardClient from "@/components/dashboard/DashboardClient";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  let bookmarks = [];
  let trendingTopics = [];
  let error = null;

  try {
    [bookmarks, trendingTopics] = await Promise.all([
      getUserBookmarks(user.id),
      getContentByCategory("trending"),
    ]);
  } catch (e) {
    error = "Failed to load dashboard data.";
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <DashboardClient bookmarks={bookmarks} trendingTopics={trendingTopics} />;
}
