
"use client";

import type { ContentItem } from '@/types/content';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bookmark as BookmarkIcon, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useBookmarks, PAGE_BOOKMARK_SLUG } from '@/hooks/useBookmarks';
import { cn } from "@/lib/utils";

interface ModuleCardProps {
  item: ContentItem;
  basePath: string;
}

const imageMap: { [key: string]: string } = {
  'cardiovascular': '/assets/body-system-cardiovascular.png',
  'respiratory': '/assets/body-system-respiratory.png',
  'neurological': '/assets/body-system-neurological.png',
  'renal': '/assets/body-systems.png',
  'endocrine': '/assets/body-systems.png',
  'gastrointestinal': '/assets/body-systems.png',
  'hematologic': '/assets/body-systems.png',
  'immune': '/assets/body-systems.png',
  'musculoskeletal': '/assets/body-systems.png',
  'integumentary': '/assets/body-systems.png',
  'hemodynamics': '/assets/hemodynamics.png',
  'pharmacology': '/assets/category-critical-care-pharmacology.png',
  'ventilator-management': '/assets/ventilator-management.png',
  'ecmo': '/assets/ecmo.png',
  'crrt': '/assets/crrt.png',
  'sled': '/assets/sled.png',
  'iabp': '/assets/iabp.png',
  'impella': '/assets/impella.png',
  'stroke-protocols': '/assets/stroke-protocols.png',
  'medication-guidelines': '/assets/medication-guidelines.png',
  'ards-management': '/assets/ards-management.png',
  'padis-guidelines': '/assets/padis-guidelines.png',
  'ttm-post-cardiac-arrest': '/assets/ttm-post-cardiac-arrest.png',
  'body-systems': '/assets/category-body-systems.png',
  'topics': '/assets/category-critical-care.png',
  'default': '/assets/topics.png'
};

function ModuleCardComponent({ item, basePath }: ModuleCardProps) {
  const { isBookmarked, toggleBookmark, isLoaded } = useBookmarks();
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setBookmarked(isBookmarked(item.slug, PAGE_BOOKMARK_SLUG));
    }
  }, [isLoaded, item.slug, isBookmarked, bookmarked]); // Added bookmarked to dependencies to ensure re-render

  const handleBookmarkToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(item.slug, PAGE_BOOKMARK_SLUG);
  };
  
  if (!item) return null;

  const imagePath = imageMap[item.slug] || imageMap['default'];

  return (
    <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-card text-card-foreground">
      <div className="relative h-48 w-full">
        <Image
          src={imagePath}
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
