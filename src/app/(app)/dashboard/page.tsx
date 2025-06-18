
"use client";

import { useState, useMemo, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Search as SearchIcon, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import TrendingTopics from "@/components/dashboard/TrendingTopics";
import BookmarksDisplay from "@/components/dashboard/BookmarksDisplay";
import { SearchInput } from "@/components/SearchInput"; // Reusable search input
import ModuleCard from "@/components/cards/ModuleCard"; // To display search results
import { bodySystems, topics, policies } from '@/lib/data';
import type { ContentItem } from '@/types/content';
import { Separator } from "@/components/ui/separator";

const allContent: ContentItem[] = [...bodySystems, ...topics, ...policies];

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredContent = useMemo(() => {
    if (!searchTerm.trim()) {
      return []; // No search results if search term is empty
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
      <header className="space-y-2 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-primary">Welcome to ICU Hub</h1>
        <p className="text-lg text-muted-foreground">
          Your central point for critical care knowledge and collaboration.
        </p>
      </header>

      <section>
        <SearchInput
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Quick search topics, systems, or protocols..."
          containerClassName="max-w-xl mx-auto md:mx-0"
        />
      </section>

      {isClient && searchTerm.trim() && (
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold font-headline text-primary">Search Results ({filteredContent.length})</h2>
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
                Try adjusting your search term or exploring the sections below.
              </p>
            </div>
          )}
           <Separator className="my-8" />
        </section>
      )}
      
      {isClient && !searchTerm.trim() && (
        <>
          <TrendingTopics />
          <Separator className="my-8" />
          <BookmarksDisplay />
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
