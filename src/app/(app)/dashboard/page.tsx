import { getUserBookmarks } from "@/lib/data";
import { getContentByCategory } from "@/lib/firebase-admin";
import { currentUser } from "@clerk/nextjs/server";
import DashboardClient from "@/components/dashboard/DashboardClient";
import type { ContentItem } from '@/types/content';

export default async function DashboardPage() {
  const user = await currentUser();
  console.log('Clerk currentUser:', user);
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-card border border-border rounded-lg p-8 shadow-md flex flex-col items-center">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="mb-4 text-muted-foreground">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path d="M12 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 2c-3.31 0-6 1.34-6 3v1h12v-1c0-1.66-2.69-3-6-3z" fill="currentColor" />
          </svg>
          <h2 className="text-xl font-semibold mb-2">Please log in to view your dashboard</h2>
          <p className="text-muted-foreground mb-4 text-center">
            You must be signed in to access your personalized ICU Hub dashboard.
          </p>
          <a href="/login">
            <button className="btn btn-primary px-6 py-2 rounded font-semibold">Log In</button>
          </a>
        </div>
      </div>
    );
  }

  let bookmarks: any[] = [];
  let trendingTopics: ContentItem[] = [];
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

  // Debug panel for user object
  return (
    <div>
      <div className="fixed top-0 right-0 bg-black bg-opacity-80 text-white p-4 z-50 text-xs max-w-lg overflow-x-auto rounded-bl-lg">
        <strong>Clerk currentUser debug:</strong>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
      <DashboardClient
        bookmarks={bookmarks}
        trendingTopics={trendingTopics}
      />
    </div>
  );
}
