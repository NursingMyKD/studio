"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchInput } from "@/components/SearchInput";
import ModuleCard from "@/components/cards/ModuleCard";
import type { ContentItem } from "@/types/content";
import { AlertCircle, Loader2, Search as SearchIconLucide } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface SearchClientContentProps {
  initialQuery: string;
  initialResults: ContentItem[];
}

export default function SearchClientContent({
  initialQuery,
  initialResults,
}: SearchClientContentProps) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [results, setResults] = useState<ContentItem[]>(initialResults);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setSearchTerm(initialQuery);
    setResults(initialResults);
  }, [initialQuery, initialResults]);

  const handleSearchSubmit = (e?: FormEvent<HTMLFormElement>) => {
    if (e) e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
  };

  useEffect(() => {
    setIsLoading(false);
  }, [initialResults]);

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Search ICU Hub</h1>
      </header>

      <section>
        <form onSubmit={handleSearchSubmit} className="flex items-center gap-2 max-w-xl">
          <SearchInput
            value={searchTerm}
            onChange={setSearchTerm}
            placeholder="Search topics, systems, or protocols..."
            containerClassName="flex-grow"
          />
          <Button type="submit" disabled={isLoading || !searchTerm.trim()}>
            <SearchIconLucide className="h-5 w-5 mr-2" />
            Search
          </Button>
        </form>
      </section>
      
      <Separator />

      {isLoading && (
        <div className="flex items-center justify-center py-10">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      )}

      {!isLoading && initialQuery.trim() && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold font-headline text-primary">
            Found {results.length} result(s) for "{initialQuery}"
          </h2>
          {results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((item) => {
                let basePath = "/topics";
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
        </section>
      )}

      {!isLoading && !initialQuery.trim() && (
         <div className="flex flex-col items-center justify-center text-center py-10 px-6 rounded-lg bg-card border border-border shadow-sm">
            <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold mb-2">Search for Content</h3>
            <p className="text-muted-foreground">
              Enter a term in the search bar above to find relevant information.
            </p>
          </div>
      )}
    </div>
  );
}
