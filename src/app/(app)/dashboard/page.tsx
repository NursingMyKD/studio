import { getContentByCategory } from "@/lib/firebase-admin";
import DashboardClient from "@/components/dashboard/DashboardClient";
import type { ContentItem } from '@/types/content';

export default async function DashboardPage() {
  let trendingTopics: ContentItem[] = [];
  let bodySystems: ContentItem[] = [];
  let criticalCareTopics: ContentItem[] = [];
  let protocolsAndGuidelines: ContentItem[] = [];
  let error = null;

  try {
    // Fetch all content in parallel
    [trendingTopics, bodySystems, criticalCareTopics, protocolsAndGuidelines] = await Promise.all([
      getContentByCategory("trending"),
      getContentByCategory("Body System"),
      getContentByCategory("Topic"),
      getContentByCategory("Policy"),
    ]);
  } catch (e) {
    console.error(e); // Log the actual error on the server
    error = "Failed to load dashboard data. Please try again later.";
  }

  if (error) {
    return <div className="text-center text-red-500 py-10">{error}</div>;
  }

  return (
      <DashboardClient
        trendingTopics={trendingTopics}
        bodySystems={bodySystems}
        criticalCareTopics={criticalCareTopics}
        protocolsAndGuidelines={protocolsAndGuidelines}
      />
  );
}
