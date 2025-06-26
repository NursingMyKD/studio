"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { FileText, Bookmark as BookmarkIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useBookmarks, PAGE_BOOKMARK_SLUG } from '@/hooks/useBookmarks';
import { cn } from '@/lib/utils';
import type { ContentItem } from '@/types/content';
import ContentPopup from '@/components/content/ContentPopup';

interface ProtocolClientPageProps {
  item: ContentItem;
}

export default function ProtocolClientPage({ item }: ProtocolClientPageProps) {
  const router = useRouter();
  const slug = item.slug;

  const [isClient, setIsClient] = useState(false);
  
  const { isBookmarked, toggleBookmark, isLoaded: bookmarksLoaded } = useBookmarks();
  const bookmarked = isBookmarked(slug, PAGE_BOOKMARK_SLUG);

  useEffect(() => {
    setIsClient(true);
  }, [slug]);

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(slug, PAGE_BOOKMARK_SLUG);
  };

  if (!isClient) {
    return (
      <div className="space-y-6">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="h-8 w-1/4 bg-muted rounded animate-pulse mb-2"></div>
            <div className="h-10 w-3/4 bg-muted rounded animate-pulse"></div>
            <div className="mt-2 h-6 w-full bg-muted rounded animate-pulse"></div>
          </CardHeader>
          <Separator />
          <CardContent className="pt-6">
            <div className="relative w-full h-60 md:h-80 mb-6 rounded-md overflow-hidden shadow-md bg-muted animate-pulse"></div>
            <div className="h-40 w-full bg-muted rounded animate-pulse"></div>
          </CardContent>
          <CardFooter>
            <div className="h-10 w-32 bg-muted rounded animate-pulse"></div>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex-grow">
              <Badge variant="outline" className="mb-2">{item.categoryType}</Badge>
              <div className="flex items-center gap-4">
                <CardTitle className="font-headline text-3xl md:text-4xl">{item.title}</CardTitle>
                {bookmarksLoaded && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBookmarkToggle}
                    aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
                    className="h-9 w-9 shrink-0"
                  >
                    <BookmarkIcon className={cn("h-6 w-6 transition-all", bookmarked ? "fill-primary text-primary" : "text-muted-foreground")} />
                  </Button>
                )}
              </div>
              {item.summary && <CardDescription className="pt-2 text-lg">{item.summary}</CardDescription>}
            </div>
            <ContentPopup 
              slug={item.slug} 
              triggerText={
                <Button size="lg" className="w-full md:w-auto shrink-0">
                  <FileText className="mr-2 h-5 w-5" /> View Overview
                </Button>
              }
            />
          </div>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          {item.keywordsForImage && (
            <div className="relative w-full h-60 md:h-80 mb-6 rounded-md overflow-hidden shadow-md">
              <Image
                src={`/assets/${item.keywordsForImage.split(',')[0].trim()}.png`}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={() => router.back()} variant="outline">Back to Protocols</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
