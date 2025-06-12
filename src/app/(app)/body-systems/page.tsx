import { bodySystems } from '@/lib/data';
import ModuleCard from '@/components/cards/ModuleCard';
import { Separator } from '@/components/ui/separator';

export default function BodySystemsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Body System Modules</h1>
        <p className="text-muted-foreground">
          Explore educational content categorized by physiological systems.
        </p>
      </header>
      <Separator />
      {bodySystems.length > 0 ? (
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
