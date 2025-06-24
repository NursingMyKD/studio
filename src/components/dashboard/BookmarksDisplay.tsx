"use client";

import { useEffect, useState, useMemo } from "react";
import { useBookmarks, PAGE_BOOKMARK_SLUG } from "@/hooks/useBookmarks";
import { AlertCircle, Bookmark, FileText, Link as LinkIcon, Loader2 } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";
import Link from "next/link";
import type { ContentItem } from "@/types/content";
import { slugify } from "@/lib/utils"; // Assuming slugify is available here

// Helper function to extract H2 sections from markdown content
// This was previously part of src/lib/data.ts logic (via getSectionsBySlug)
function getSectionsFromMarkdown(markdownContent: string): Array<{ slug: string; name: string }> {
  if (!markdownContent) return [];
  const sections: Array<{ slug: string; name: string }> = [];
  const headingRegex = /^## (.*$)/gm; // Matches H2 headings
  let match;
  while ((match = headingRegex.exec(markdownContent)) !== null) {
    const name = match[1];
    if (name) {
      sections.push({ slug: slugify(name), name });
    }
  }
  return sections;
}

export default function BookmarksDisplay() {
  const { bookmarks, isLoaded: bookmarksLoaded } = useBookmarks();
  const [bookmarkedItemsDetails, setBookmarkedItemsDetails] = useState<ContentItem[]>([]);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [errorDetails, setErrorDetails] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookmarkDetails = async () => {
      if (!bookmarksLoaded || Object.keys(bookmarks).length === 0) {
        setBookmarkedItemsDetails([]);
        setIsLoadingDetails(false);
        return;
      }

      const uniquePageSlugs = Array.from(new Set(Object.keys(bookmarks)));

      if (uniquePageSlugs.length === 0) {
        setBookmarkedItemsDetails([]);
        setIsLoadingDetails(false);
        return;
      }

      setIsLoadingDetails(true);
      try {
        // This is a conceptual fetch. Replace with your actual API call.
        // For example, you might have a batch-fetch endpoint.
        const response = await fetch(`/api/content?slugs=${uniquePageSlugs.join(',')}`);
        if (!response.ok) {
          throw new Error('Failed to fetch bookmarked content details.');
        }
        const details = await response.json();
        setBookmarkedItemsDetails(details);
      } catch (err) {
        setErrorDetails(err instanceof Error ? err.message : 'An unknown error occurred.');
      } finally {
        setIsLoadingDetails(false);
      }
    };

    fetchBookmarkDetails();
  }, [bookmarks, bookmarksLoaded]);

  const allBookmarkEntries = useMemo(() => {
    return Object.entries(bookmarks).flatMap(([pageSlug, sectionSlugs]) =>
      sectionSlugs.map(sectionSlug => ({ pageSlug, sectionSlug }))
    );
  }, [bookmarks]);

  if (!bookmarksLoaded) {
    return (
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold font-headline text-primary">My Bookmarks</h2>
        <div className="space-y-4">
          {[1, 2, 3].map(i => <Skeleton key={i} className="h-16 w-full rounded-lg" />)}
        </div>
      </section>
    );
  }

  if (isLoadingDetails) {
    return (
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold font-headline text-primary">My Bookmarks</h2>
        <div className="flex items-center justify-center py-10">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </section>
    );
  }

  if (errorDetails) {
    return (
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold font-headline text-primary">My Bookmarks</h2>
        <div className="flex flex-col items-center justify-center text-center py-10 px-6 rounded-lg bg-destructive/10 border border-destructive text-destructive-foreground">
          <AlertCircle className="h-12 w-12 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Error Loading Bookmarks</h3>
          <p>{errorDetails}</p>
        </div>
      </section>
    );
  }
  
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold font-headline text-primary">My Bookmarks</h2>
      {allBookmarkEntries.length > 0 && bookmarkedItemsDetails.length > 0 ? (
        <Card>
          <CardContent className="p-0">
            <ul className="divide-y divide-border">
              {allBookmarkEntries.map(({ pageSlug, sectionSlug }) => {
                const item = bookmarkedItemsDetails.find(detail => detail.id === pageSlug);
                if (!item) return null; // Should not happen if API returns all requested items

                let basePath = "/topics";
                if (item.categoryType === "Body System") basePath = "/body-systems";
                else if (item.categoryType === "Policy") basePath = "/protocols-and-guidelines";

                const isPageBookmark = sectionSlug === PAGE_BOOKMARK_SLUG;
                let title = item.title;
                let href = `${basePath}/${pageSlug}`;
                let subTitle = isPageBookmark ? undefined : `From: ${item.title}`;

                if (!isPageBookmark) {
                  const allSections = [
                    ...getSectionsFromMarkdown(item.generalOverview || ""),
                    ...getSectionsFromMarkdown(item.inDepthConsiderations || ""),
                  ];
                  const section = allSections.find(s => s.slug === sectionSlug);
                  title = section ? section.name : 'Bookmarked Section';
                  href += `#${sectionSlug}`;
                } else {
                  // For page bookmarks, ensure title is the page title
                  title = item.title;
                }

                return (
                  <li key={`${pageSlug}-${sectionSlug}`}>
                    <Link
                      href={href}
                      className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4 w-full">
                        <div className="flex-shrink-0">
                          {isPageBookmark ? <FileText className="h-5 w-5 text-primary" /> : <Bookmark className="h-5 w-5 text-accent" />}
                        </div>
                        <div className="flex-grow">
                          <p className="font-semibold">{title}</p>
                          {subTitle && (
                            <p className="text-sm text-muted-foreground">
                              {subTitle}
                            </p>
                          )}
                        </div>
                        <LinkIcon className="h-4 w-4 text-muted-foreground ml-auto flex-shrink-0" />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center text-center py-10 px-6 rounded-lg bg-card border border-border shadow-sm">
          <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold mb-2">No Bookmarks Yet</h3>
          <p className="text-muted-foreground">
            Click the bookmark icon on any content card or next to a section heading to save it here.
          </p>
        </div>
      )}
    </section>
  );
}
