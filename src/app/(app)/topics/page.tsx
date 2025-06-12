import { topics } from '@/lib/data';
import ModuleCard from '@/components/cards/ModuleCard';
import { Separator } from '@/components/ui/separator';

export default function TopicsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Critical Care Topics</h1>
        <p className="text-muted-foreground">
          Access learning modules based on key ICU topics like hemodynamics and pharmacology.
        </p>
      </header>
      <Separator />
      {topics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((item) => (
            <ModuleCard key={item.id} item={item} basePath="/topics" />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-muted-foreground">No topic-based modules available at this time.</p>
        </div>
      )}
    </div>
  );
}
