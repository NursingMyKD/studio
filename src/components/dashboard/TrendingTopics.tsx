
"use client";

import { topics, policies } from '@/lib/data'; // Assuming these contain the items
import type { ContentItem } from '@/types/content';
import ModuleCard from '@/components/cards/ModuleCard';
import Link from 'next/link';
import { Button } from '../ui/button';

// Select a few items to feature as "trending"
// For this example, taking first 3 from combined policies and topics
const trendingItems: ContentItem[] = [
  policies.find(p => p.slug === 'sepsis-management') || policies[0], // Placeholder for Sepsis
  policies.find(p => p.slug === 'ards-management') || policies[1],   // Placeholder for ARDS
  policies.find(p => p.slug === 'padis-guidelines') || policies[2],  // Placeholder for PADIS
].filter(Boolean) as ContentItem[]; // Filter out any undefined if slugs don't match

export default function TrendingTopics() {
  if (!trendingItems.length) {
    return null; // Or some placeholder if data isn't ready
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold font-headline text-primary">Trending Topics</h2>
        <Button variant="link" asChild>
          <Link href="/topics">View All</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingItems.map((item) => {
          // Determine basePath based on item.categoryType or a known mapping
          let basePath = "/topics"; // Default
          if (item.categoryType === "Policy") basePath = "/protocols-and-guidelines";
          // Add more conditions if body systems or other types can be trending

          return <ModuleCard key={item.id} item={item} basePath={basePath} />;
        })}
      </div>
    </section>
  );
}
