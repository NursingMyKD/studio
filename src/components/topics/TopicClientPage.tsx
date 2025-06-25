"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import LegalDisclaimerModal from '@/components/modals/LegalDisclaimerModal';
import { CheckCircle, BookOpen, Layers, Bookmark as BookmarkIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useBookmarks, PAGE_BOOKMARK_SLUG } from '@/hooks/useBookmarks';
import { cn } from '@/lib/utils';
import MarkdownRenderer from '@/components/content/MarkdownRenderer';
import type { ContentItem } from '@/types/content';

interface TopicClientPageProps {
  item: ContentItem;
}

export default function TopicClientPage({ item }: TopicClientPageProps) {
  const router = useRouter();
  const slug = item.slug; // Get slug from the item prop

  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  const { isBookmarked, toggleBookmark, isLoaded: bookmarksLoaded } = useBookmarks();
  const bookmarked = isBookmarked(slug, PAGE_BOOKMARK_SLUG);

  useEffect(() => {
    setIsClient(true);
    // Reset disclaimer and content visibility when the item (slug) changes
    setIsDisclaimerOpen(false);
    setShowContent(false);
  }, [slug]);

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(slug, PAGE_BOOKMARK_SLUG);
  };

  const handleAcceptDisclaimer = () => {
    setShowContent(true);
    setIsDisclaimerOpen(false);
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
            {!showContent && (
              <Button onClick={() => setIsDisclaimerOpen(true)} size="lg" className="w-full md:w-auto shrink-0">
                <BookOpen className="mr-2 h-5 w-5" /> View Overview
              </Button>
            )}
          </div>
        </CardHeader>
        
        {showContent && (
          <>
            <Separator />
            <CardContent className="pt-6">
              {item.keywordsForImage && (
                <div className="relative w-full h-60 md:h-80 mb-6 rounded-md overflow-hidden shadow-md">
                  <Image
                    src={`https://placehold.co/800x300.png?text=${encodeURIComponent(item.title)}`}
                    alt={`${item.title} visual representation`}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
              )}
              <MarkdownRenderer content={item.generalOverview || "No overview available."} pageSlug={slug} />
              {item.inDepthConsiderations && (
                <div className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>In-Depth Considerations</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <MarkdownRenderer content={item.inDepthConsiderations} />
                    </CardContent>
                  </Card>
                </div>
              )}
              <div className="mt-8 text-center">
                <Button onClick={() => router.push(`/topics/${slug}/details`)} size="lg">
                  <Layers className="mr-2 h-5 w-5" /> View In-Depth Details
                </Button>
              </div>
            </CardContent>
          </>
        )}
      </Card>

      <LegalDisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
        onAccept={handleAcceptDisclaimer}
      />

      {showContent && (
        <div className="flex items-center text-sm text-green-700 dark:text-green-300 p-4 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-200 dark:border-green-700/40">
          <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
          <span>You have accepted the legal disclaimer. The content is provided for educational purposes only.</span>
        </div>
      )}
      <CardFooter className="mt-4">
          <Button variant="outline" asChild>
            <Link href="/topics">Back to All Topics</Link>
          </Button>
        </CardFooter>
    </div>
  );
}
