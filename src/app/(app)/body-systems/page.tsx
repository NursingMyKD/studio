import { getContentByCategory } from '@/lib/firebase-admin';
import ModuleCard from '@/components/cards/ModuleCard';
import { Separator } from '@/components/ui/separator';
import type { ContentItem } from '@/types/content';

export default async function BodySystemsPage() {
  let bodySystems: ContentItem[] = [];
  let error = null;
  try {
    bodySystems = await getContentByCategory('Body System');
  } catch (e) {
    console.error("Failed to fetch body systems:", e);
    error = 'Failed to load body system modules.';
  }

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Body System Modules</h1>
        <p className="text-muted-foreground">
          Explore educational content categorized by physiological systems.
        </p>
      </header>
      <Separator />
      {error ? (
        <div className="text-center py-10 text-destructive">{error}</div>
      ) : bodySystems && bodySystems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bodySystems.map((item) => (
            <ModuleCard key={item.id} item={item} basePath="/body-systems" />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-muted-foreground">No body system modules available at this time.</p>
        </div>
      )}
    </div>
  );
}
