
"use client";

import type { ContentItem } from '@/types/content';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bookmark as BookmarkIcon, Star } from 'lucide-react'; // Added BookmarkIcon
import React, { useEffect, useState } from 'react';
import { useBookmarks } from '@/hooks/useBookmarks';

interface ModuleCardProps {
  item: ContentItem;
  basePath: string;
}

function ModuleCardComponent({ item, basePath }: ModuleCardProps) {
  const { isBookmarked, toggleBookmark, isLoaded } = useBookmarks();
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setBookmarked(isBookmarked(item.slug));
    }
  }, [isLoaded, item.slug, isBookmarked]);

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent link navigation if card is wrapped in Link
    e.stopPropagation();
    toggleBookmark(item.slug);
    setBookmarked(!bookmarked);
  };
  
  if (!item) return null;

  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-card text-card-foreground">
      <div className="relative h-48 w-full">
        <Image
          src={`https://placehold.co/400x200.png`}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
          data-ai-hint={item.keywordsForImage || "medical education"}
          priority={false} 
        />
         <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-background/70 hover:bg-background/90 text-foreground"
            onClick={handleBookmarkToggle}
            aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
          >
            <BookmarkIcon className={cn("h-5 w-5", bookmarked ? "fill-primary text-primary" : "text-muted-foreground")} />
          </Button>
      </div>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-semibold font-headline">{item.title}</CardTitle>
          {item.categoryType && (
            <Badge variant="secondary" className="capitalize shrink-0 ml-2">{item.categoryType.toLowerCase().replace(' system', '').replace(' topic', '').replace(' policy', '')}</Badge>
          )}
        </div>
        {item.summary && (
            <CardDescription className="mt-1 h-16 overflow-hidden text-ellipsis text-muted-foreground">
            {item.summary}
            </CardDescription>
        )}
      </CardHeader>
      <CardContent className="flex-grow">
        {/* Additional content can go here if needed */}
      </CardContent>
      <CardFooter>
        <Link href={`${basePath}/${item.slug}`} passHref className="w-full">
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

const ModuleCard = React.memo(ModuleCardComponent);
export default ModuleCard;
