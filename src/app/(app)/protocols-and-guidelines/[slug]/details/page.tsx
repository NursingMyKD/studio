
"use client";

import { useMemo, useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { policies } from '@/lib/data'; // policies array contains items of type 'Policy'
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { AlertTriangle, ArrowLeft, Bookmark as BookmarkIcon } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { useBookmarks, PAGE_BOOKMARK_SLUG } from '@/hooks/useBookmarks';
import { cn } from '@/lib/utils';
import MarkdownRenderer from '@/components/content/MarkdownRenderer';

export default function ProtocolOrGuidelineInDepthDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const item = useMemo(() => policies.find(p => p.slug === slug), [slug]);
  const [isClient, setIsClient] = useState(false);
  
  const { isBookmarked, toggleBookmark, isLoaded } = useBookmarks();
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
    return <div className="h-96 animate-pulse bg-muted rounded-lg"></div>;
  }

  if (!item) {
    return (
      <div className="text-center py-20">
        <AlertTriangle className="mx-auto h-16 w-16 text-destructive mb-4" />
        <h2 className="text-2xl font-semibold mb-2 font-headline">Content Not Found</h2>
        <p className="text-muted-foreground mb-6">The requested protocol or guideline details could not be found.</p>
        <Button asChild>
          <Link href="/protocols-and-guidelines">Back to Protocols and Guidelines</Link>
        </Button>
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
            {isLoaded && (
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
          <MarkdownRenderer content={item.inDepthConsiderations} pageSlug={slug} />
        </CardContent>
      </Card>
       <div className="mt-8 text-center">
        <Button variant="outline" onClick={() => router.push(`/protocols-and-guidelines/${slug}`)}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Overview
        </Button>
      </div>
    </div>
  );
}
