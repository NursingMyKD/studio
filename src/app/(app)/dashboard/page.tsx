import { getUserBookmarks } from "@/lib/data";
import { getContentByCategory } from "@/lib/firebase-admin";
import { currentUser } from "@clerk/nextjs/server";
import DashboardClient from "@/components/dashboard/DashboardClient";

export default async function DashboardPage() {
  const user = await currentUser();
  if (!user) {
    return <div>Not logged in</div>;
  }

  const [bookmarks, trendingTopics] = await Promise.all([
    getUserBookmarks(user.id),
    getContentByCategory("trending"),
  ]);

  return <DashboardClient bookmarks={bookmarks} trendingTopics={trendingTopics} />;
}
