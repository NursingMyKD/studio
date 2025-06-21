
"use client";

import { useBookmarks, PAGE_BOOKMARK_SLUG } from "@/hooks/useBookmarks";
import { AlertCircle, Bookmark, FileText, Link as LinkIcon } from "lucide-react";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent } from "../ui/card";
import { getContentItemBySlug, getSectionsBySlug } from '@/lib/data';
import Link from "next/link";
import { Fragment } from "react";
import { Separator } from "../ui/separator";

export default function BookmarksDisplay() {
  const { bookmarks, isLoaded } = useBookmarks();

  if (!isLoaded) {
    return (
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold font-headline text-primary">My Bookmarks</h2>
        <div className="space-y-4">
          <Skeleton key={1} className="h-16 w-full rounded-lg" />
          <Skeleton key={2} className="h-16 w-full rounded-lg" />
          <Skeleton key={3} className="h-16 w-full rounded-lg" />
        </div>
      </section>
    );
  }

  const allBookmarkEntries = Object.entries(bookmarks).flatMap(([pageSlug, sectionSlugs]) =>
    sectionSlugs.map(sectionSlug => ({ pageSlug, sectionSlug }))
  );

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold font-headline text-primary">My Bookmarks</h2>
      {allBookmarkEntries.length > 0 ? (
        <Card>
          <CardContent className="p-0">
            <ul className="divide-y divide-border">
              {allBookmarkEntries.map(({ pageSlug, sectionSlug }) => {
                const item = getContentItemBySlug(pageSlug);
                if (!item) return null;

                let basePath = "/topics";
                if (item.categoryType === "Body System") basePath = "/body-systems";
                else if (item.categoryType === "Policy") basePath = "/protocols-and-guidelines";

                const isPageBookmark = sectionSlug === PAGE_BOOKMARK_SLUG;
                let title = item.title;
                let href = `${basePath}/${pageSlug}`;

                if (!isPageBookmark) {
                  const allSections = getSectionsBySlug(pageSlug);
                  const section = allSections.find(s => s.slug === sectionSlug);
                  title = section ? section.name : 'Bookmarked Section';
                  href += `#${sectionSlug}`;
                }

                return (
                  <li key={`${pageSlug}-${sectionSlug}`}>
                    <Link href={href} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0">
                        {isPageBookmark ? <FileText className="h-5 w-5 text-primary" /> : <Bookmark className="h-5 w-5 text-accent" />}
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold">{title}</p>
                        {!isPageBookmark && (
                          <p className="text-sm text-muted-foreground">
                            From: {item.title}
                          </p>
                        )}
                      </div>
                      <LinkIcon className="h-4 w-4 text-muted-foreground ml-auto flex-shrink-0" />
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
