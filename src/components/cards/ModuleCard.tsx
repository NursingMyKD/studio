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

// A strict map of slugs to their specific, unique images.
const imageMap: { [key: string]: string } = {
  'cardiovascular': '/assets/body-system-cardiovascular.png',
  'neurological': '/assets/body-system-neurological.png',
  'respiratory': '/assets/body-system-respiratory.png',
  'ecmo': '/assets/category-critical-care-ECMO.png',
  'ventilator-management': '/assets/category-critical-care-Ventilator.png',
  'pharmacology': '/assets/category-critical-care-pharmacology.png',
  'stroke-protocols': '/assets/category-protocols-stroke.png',
  'body-systems': '/assets/category-body-systems.png',
  'critical-care-topics': '/assets/category-critical-care.png',
  'crrt': '/assets/CRRT.png',
  'ards-management': '/assets/ARDS.png',
  'hemodynamics': '/assets/hemodynamics.png',
  'renal': '/assets/Category-systems-renal.png',
  'iabp': '/assets/IABP.png',
  'ttm-post-cardiac-arrest': '/assets/TTM.png'
};

// A single, global default image for any module without a specific image.
const defaultImageUrl = '/assets/app-logo.png';

const getImageUrl = (item: ContentItem): string => {
  // Return the specific image if it exists, otherwise return the global default.
  return imageMap[item.slug] || defaultImageUrl;
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

  const imageUrl = getImageUrl(item);

  return (
    <Card className="flex flex-col h-[450px] overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-2xl group bg-gradient-to-br from-background to-muted relative">
      <Link
        href={`${basePath}/${item.slug}`}
        className="flex flex-col h-full"
      >
        <div className="flex flex-col h-full">
          <CardHeader className="p-0 relative">
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                src={imageUrl}
                alt={item.title || 'Module image'}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                <span className="backdrop-blur bg-white/30 border border-white/40 rounded-full p-2 shadow-lg flex items-center justify-center animate-fade-in">
                  <Star className="h-7 w-7 text-primary" />
                </span>
                <Badge className="bg-primary/90 text-white shadow-lg px-3 py-1 text-xs font-semibold rounded-full animate-fade-in">
                  {item.categoryType || 'Module'}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <CardTitle className="text-lg font-bold font-headline leading-tight mb-2 group-hover:text-primary transition-colors duration-200">
              {item.title}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground line-clamp-3">
              {item.summary}
            </CardDescription>
          </CardContent>
          <CardFooter className="p-4 pt-0 mt-auto flex justify-between items-center">
            <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover:underline">
              Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
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
        </div>
      </Link>
    </Card>
  );
}

export default React.memo(ModuleCardComponent);
