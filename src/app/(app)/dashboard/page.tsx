import { getContentByCategory } from "@/lib/firebase-admin";
import DashboardClient from "@/components/dashboard/DashboardClient";
import type { ContentItem } from '@/types/content';

export default async function DashboardPage() {
  let trendingTopics: ContentItem[] = [];
  let error = null;

  try {
    trendingTopics = await getContentByCategory("trending");
  } catch (e) {
    error = "Failed to load dashboard data.";
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
      <DashboardClient
        trendingTopics={trendingTopics}
      />
  );
}
