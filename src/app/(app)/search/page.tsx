
"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SearchInput } from "@/components/SearchInput";
import ModuleCard from "@/components/cards/ModuleCard";
import { bodySystems, topics, policies } from '@/lib/data';
import type { ContentItem } from '@/types/content';
import { AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const allContent: ContentItem[] = [...bodySystems, ...topics, ...policies];

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || "";
  const [searchTerm, setSearchTerm] = useState(initialQuery);

  useEffect(() => {
    setSearchTerm(initialQuery);
  }, [initialQuery]);

  const filteredContent = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }
    const lowercasedTerm = searchTerm.toLowerCase();
    return allContent.filter(item =>
      item.title.toLowerCase().includes(lowercasedTerm) ||
      item.summary.toLowerCase().includes(lowercasedTerm) ||
      (item.keywordsForImage && item.keywordsForImage.toLowerCase().includes(lowercasedTerm)) ||
      item.categoryType.toLowerCase().includes(lowercasedTerm)
    );
  }, [searchTerm]);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Search Results</h1>
        <p className="text-muted-foreground">
          {searchTerm.trim() ? `Showing results for "${searchTerm}"` : "Enter a term above to search."}
        </p>
      </header>

      <section>
        {/* Note: This search input only updates the current page state, not the URL */}
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Search topics, systems, or protocols..."
          containerClassName="max-w-xl"
        />
      </section>
      
      <Separator />

      <section className="space-y-6">
        {searchTerm.trim() && (
          <>
            <h2 className="text-2xl font-semibold font-headline text-primary">Found {filteredContent.length} result(s)</h2>
            {filteredContent.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredContent.map((item) => {
                  let basePath = "/topics"; // Default
                  if (item.categoryType === "Body System") basePath = "/body-systems";
                  else if (item.categoryType === "Policy") basePath = "/protocols-and-guidelines";
                  return <ModuleCard key={item.id} item={item} basePath={basePath} />;
                })}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-10 px-6 rounded-lg bg-card border border-border shadow-sm">
                <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">No Results Found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search term.
                </p>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}


export default function SearchPage() {
  return (
    <Suspense fallback={<SearchSkeleton />}>
      <SearchContent />
    </Suspense>
  );
}

function SearchSkeleton() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <Skeleton className="h-10 w-1/2" />
        <Skeleton className="h-6 w-3/4" />
      </header>
      <section>
        <Skeleton className="h-12 w-full max-w-xl" />
      </section>
      <Separator />
      <section className="space-y-6">
        <Skeleton className="h-8 w-1/4" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Skeleton className="h-96 w-full" />
          <Skeleton className="h-96 w-full" />
          <Skeleton className="h-96 w-full" />
        </div>
      </section>
    </div>
  );
}
