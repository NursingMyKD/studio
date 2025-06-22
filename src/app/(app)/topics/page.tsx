import { getContentByCategory } from '@/lib/firebase-admin';
import ModuleCard from '@/components/cards/ModuleCard';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';
import type { ContentItem } from '@/types/content';

export const metadata: Metadata = {
  title: 'Critical Care Topics | ICU Hub',
  description:
    'Explore learning modules based on key ICU topics like hemodynamics, pharmacology, and more.',
};

export default async function TopicsPage() {
  let topics: ContentItem[] = [];
  let error = null;
  try {
    topics = await getContentByCategory('Topic');
  } catch (e) {
    console.error('Failed to fetch topics:', e);
    error = 'Failed to load critical care topics.';
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">
          Critical Care Topics
        </h1>
        <p className="text-muted-foreground">
          Access learning modules based on key ICU topics like hemodynamics and
          pharmacology.
        </p>
      </header>
      <Separator />
      {error ? (
        <div className="text-center py-10 text-destructive">{error}</div>
      ) : topics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((item) => (
            <ModuleCard key={item.id} item={item} basePath="/topics" />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-muted-foreground">
            No topic-based modules available at this time.
          </p>
        </div>
      )}
    </div>
  );
}
