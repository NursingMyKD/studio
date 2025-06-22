"use client";

import type { ContentItem } from '@/types/content';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Bookmark as BookmarkIcon } from 'lucide-react';
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
  const [isBookmarkedState, setIsBookmarkedState] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      setIsBookmarkedState(isBookmarked(item.slug, PAGE_BOOKMARK_SLUG));
    }
  }, [isLoaded, item.slug, isBookmarked]);

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(item.slug, PAGE_BOOKMARK_SLUG);
    setIsBookmarkedState(prev => !prev);
  };

  const imageUrl = imageMap[item.slug] || imageMap['default'];

  return (
    <Card className="flex flex-col h-full overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
      <Link href={`${basePath}/${item.slug}`} passHref legacyBehavior>
        <a className="flex flex-col h-full">
          <CardHeader className="p-0 relative">
            <div className="aspect-video overflow-hidden">
              <Image
                src={imageUrl}
                alt={item.title || 'Module image'}
                width={400}
                height={225}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <CardTitle className="text-lg font-bold font-headline leading-tight mb-2">{item.title}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground line-clamp-3">
              {item.summary}
            </CardDescription>
          </CardContent>
          <CardFooter className="p-4 pt-0 mt-auto flex justify-between items-center">
            <Button variant="link" className="p-0 h-auto text-primary font-semibold">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <button
              onClick={handleBookmarkClick}
              className={cn(
                "p-2 rounded-full transition-colors",
                isBookmarkedState ? "bg-accent text-accent-foreground" : "hover:bg-muted"
              )}
              aria-label={isBookmarkedState ? 'Remove bookmark' : 'Add bookmark'}
            >
              <BookmarkIcon className={cn("h-5 w-5", isBookmarkedState ? "fill-current" : "")} />
            </button>
          </CardFooter>
        </a>
      </Link>
    </Card>
  );
}

export default React.memo(ModuleCardComponent);
