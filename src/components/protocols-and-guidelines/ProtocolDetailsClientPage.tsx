"use client";

import { useMemo, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowLeft, Bookmark as BookmarkIcon } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { useBookmarks, PAGE_BOOKMARK_SLUG } from '@/hooks/useBookmarks';
import { cn } from '@/lib/utils';
import MarkdownRenderer from '@/components/content/MarkdownRenderer';
import type { ContentItem } from '@/types/content';

interface ProtocolDetailsClientPageProps {
  item: ContentItem;
}

export default function ProtocolDetailsClientPage({ item }: ProtocolDetailsClientPageProps) {
  const router = useRouter();
  const slug = item.slug;
  const [isClient, setIsClient] = useState(false);

  const { isBookmarked, toggleBookmark, isLoaded: bookmarksLoaded } = useBookmarks();
  const bookmarked = isBookmarked(slug, PAGE_BOOKMARK_SLUG);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(slug, PAGE_BOOKMARK_SLUG);
  };

  if (!isClient) {
    return (
      <div className="space-y-6">
        <div className="h-10 w-40 bg-muted rounded animate-pulse mb-6"></div>
        <Card className="shadow-lg">
          <CardHeader>
            <div className="h-10 w-3/4 bg-muted rounded animate-pulse"></div>
            <div className="mt-2 h-6 w-full bg-muted rounded animate-pulse"></div>
          </CardHeader>
          <Separator/>
          <CardContent className="pt-6">
            <div className="h-96 w-full bg-muted rounded animate-pulse"></div>
          </CardContent>
        </Card>
        <div className="mt-8 text-center">
          <div className="h-10 w-40 bg-muted rounded animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Button variant="outline" onClick={() => router.back()} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Overview
      </Button>
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-grow">
              <CardTitle className="font-headline text-3xl md:text-4xl">{item.title} - In-Depth Details</CardTitle>
              {item.summary && <CardDescription className="pt-2 text-lg">{item.summary}</CardDescription>}
            </div>
            {bookmarksLoaded && (
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBookmarkToggle}
                    aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
                    className="h-10 w-10 shrink-0"
                >
                    <BookmarkIcon className={cn("h-7 w-7 transition-all", bookmarked ? "fill-primary text-primary" : "text-muted-foreground")} />
                </Button>
            )}
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <MarkdownRenderer content={item.inDepthConsiderations || "No in-depth details available."} pageSlug={slug} />
        </CardContent>
      </Card>
      <div className="mt-8 text-center">
         <Button variant="outline" asChild>
           <Link href={`/protocols-and-guidelines/${slug}`} legacyBehavior>
             <ArrowLeft className="mr-2 h-4 w-4" /> Back to Overview
           </Link>
         </Button>
       </div>
    </div>
  );
}
