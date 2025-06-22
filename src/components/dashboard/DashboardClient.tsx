"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle, Loader2 } from "lucide-react";
import BookmarksDisplay from "@/components/dashboard/BookmarksDisplay";
import { TrendingTopics } from "@/components/dashboard/TrendingTopics";
import { SearchInput } from "@/components/SearchInput";
import ModuleCard from "@/components/cards/ModuleCard";
import type { ContentItem } from '@/types/content';
import { Separator } from "@/components/ui/separator";

// Debounce function
const debounce = <F extends (...args: any[]) => any>(func: F, waitFor: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  const debounced = (...args: Parameters<F>) => {
    if (timeout !== null) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };

  return debounced;
};

interface DashboardClientProps {
    trendingTopics: ContentItem[];
}

export default function DashboardClient({ trendingTopics }: DashboardClientProps) {
  // Handle missing or empty data
  if (!trendingTopics) {
    return <div className="text-center text-destructive py-10">Dashboard data is missing or failed to load.</div>;
  }
  if (trendingTopics.length === 0) {
    return <div className="text-center text-muted-foreground py-10">No dashboard data available.</div>;
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<ContentItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const performSearch = useCallback(async (term: string) => {
    if (!term.trim()) {
      setSearchResults([]);
      setIsLoading(false);
      setSearchError(null);
      return;
    }

    setIsLoading(true);
    setSearchError(null);

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(term)}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `Error: ${response.status}`);
      }
      const data: ContentItem[] = await response.json();
      setSearchResults(data);
    } catch (error: any) {
      console.error("Search failed:", error);
      setSearchError(error.message || "Failed to fetch search results.");
      setSearchResults([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const debouncedSearch = useMemo(() => {
    return debounce(performSearch, 300);
  }, [performSearch]);

  useEffect(() => {
    debouncedSearch(searchTerm);
  }, [searchTerm, debouncedSearch]);

  return (
    <div className="space-y-8">
      <header className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-primary">Welcome to ICU Hub</h1>
        <p className="text-lg text-muted-foreground">
          Your central point for critical care knowledge and collaboration.
        </p>
      </header>

      <Separator />

      {isClient && searchResults.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold font-headline text-primary">
            Search Results ({isLoading ? "Searching..." : searchResults.length})
          </h2>
          {isLoading && (
            <div className="flex items-center justify-center py-10">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
          )}
          {!isLoading && searchError && (
            <div className="flex flex-col items-center justify-center text-center py-10 px-6 rounded-lg bg-destructive/10 border border-destructive text-destructive-foreground">
              <AlertCircle className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Search Error</h3>
              <p>{searchError}</p>
            </div>
          )}
          {!isLoading && !searchError && searchResults.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map((item) => {
                let basePath = "/topics"; // Default
                if (item.categoryType === "Body System") basePath = "/body-systems";
                else if (item.categoryType === "Policy") basePath = "/protocols-and-guidelines";
                return <ModuleCard key={item.id} item={item} basePath={basePath} />;
              })}
            </div>
          )}
          {!isLoading && !searchError && searchResults.length === 0 && searchTerm.trim() && (
            <div className="flex flex-col items-center justify-center text-center py-10 px-6 rounded-lg bg-card border border-border shadow-sm">
              <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Results Found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search term or exploring the sections below.
              </p>
            </div>
          )}
           <Separator className="my-8" />
        </section>
      )}
      
      {isClient && !searchTerm.trim() && (
        <>
          <div className="flex flex-col gap-8">
            <TrendingTopics trendingTopics={trendingTopics} />
            <BookmarksDisplay />
          </div>
          <Separator className="my-8" />
        </>
      )}
       {!isClient && ( // Skeleton loaders for SSR/initial load
         <>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div className="h-8 w-48 bg-muted rounded-md animate-pulse"></div>
                    <div className="h-6 w-20 bg-muted rounded-md animate-pulse"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1,2,3].map(i => <div key={i} className="h-96 w-full bg-muted rounded-lg animate-pulse" />)}
                </div>
            </div>
            <Separator className="my-8" />
            <div className="space-y-6">
                <div className="h-8 w-48 bg-muted rounded-md animate-pulse"></div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {[1,2].map(i => <div key={i} className="h-96 w-full bg-muted rounded-lg animate-pulse" />)}
                </div>
            </div>
         </>
       )}
    </div>
  );
}
