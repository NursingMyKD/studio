import { getContentByCategory } from '@/lib/firebase-admin';
import ModuleCard from '@/components/cards/ModuleCard';
import { Separator } from '@/components/ui/separator';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Protocols and Guidelines | ICU Hub',
  description:
    'Access unit protocols and guidelines for critical care, including stroke protocols, medication guidelines, and more.',
};

export default async function ProtocolsAndGuidelinesPage() {
  // Assuming 'Policy' is the categoryType for items that should appear here.
  const policies = await getContentByCategory('Policy');

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Protocols and Guidelines</h1>
        <p className="text-muted-foreground">
          Find unit protocols and guidelines categorized by topic, such as stroke protocols and medication guidelines.
        </p>
      </header>
      <Separator />
      {policies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {policies.map((item) => (
            <ModuleCard key={item.id} item={item} basePath="/protocols-and-guidelines" />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-lg text-muted-foreground">No protocols or guidelines available at this time.</p>
        </div>
      )}
    </div>
  );
}

