import type { ContentItem } from "@/types/content";
import ModuleCard from "@/components/cards/ModuleCard";
import Link from "next/link";
import { Button } from "../ui/button";

interface TrendingTopicsProps {
  trendingTopics: ContentItem[];
}

export function TrendingTopics({ trendingTopics }: TrendingTopicsProps) {
  if (!trendingTopics || trendingTopics.length === 0) {
    return (
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold font-headline text-primary">Trending Topics</h2>
        </div>
        <p>No trending topics to display.</p>
      </section>
    );
  }

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold font-headline text-primary">Trending Topics</h2>
        <Button variant="outline" asChild>
          <Link href="/topics">View All</Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trendingTopics.map((item) => (
          <ModuleCard key={item.id} item={item} basePath={item.categoryType.toLowerCase()} />
        ))}
      </div>
    </section>
  );
}
