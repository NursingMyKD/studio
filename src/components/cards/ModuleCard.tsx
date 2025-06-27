"use client";

import type { ContentItem } from '@/types/content';
import Link from 'next/link';
import Image from 'next/image';
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bookmark as BookmarkIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useBookmarks, PAGE_BOOKMARK_SLUG } from '@/hooks/useBookmarks';
import { cn } from "@/lib/utils";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

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
  'pharmacology': '/assets/medication guidelines.png',
  'stroke-protocols': '/assets/category-protocols-stroke.png',
  'body-systems': '/assets/category-body-systems.png',
  'critical-care-topics': '/assets/category-critical-care.png',
  'crrt': '/assets/CRRT.png',
  'ards-management': '/assets/ARDS.png',
  'hemodynamics': '/assets/hemodynamics.png',
  'renal': '/assets/Category-systems-renal.png',
  'iabp': '/assets/IABP.png',
  'ttm-post-cardiac-arrest': '/assets/TTM.png',
  'gastrointestinal': '/assets/Gastrointestinal tract.png',
  'immune': '/assets/Immune System.png',
  'padis-guidelines': '/assets/PADIS Guidelines.png'
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
    <CardContainer containerClassName="w-full h-full">
      <CardBody className="relative group/card w-full h-full">
        <div className="flex flex-col h-[450px] overflow-hidden rounded-xl border border-border bg-gradient-to-br from-background to-muted shadow-md transition-shadow hover:shadow-xl w-full h-full">
          <Link
            href={`${basePath}/${item.slug}`}
            className="flex flex-col h-full"
          >
            <div className="flex flex-col h-full">
              <CardHeader className="p-0 relative">
                <CardItem
                  translateZ={50}
                  className="w-full"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={item.title || 'Module image'}
                      fill
                      className="object-cover group-hover/card:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  </div>
                </CardItem>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <CardItem
                  as="h3"
                  translateZ={60}
                  className="text-lg font-bold font-headline leading-tight mb-2 group-hover/card:text-primary transition-colors duration-200"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ={40}
                  className="text-sm text-muted-foreground line-clamp-3"
                >
                  {item.summary}
                </CardItem>
              </CardContent>
              <CardFooter className="p-4 pt-0 mt-auto flex justify-between items-center">
                <CardItem
                  translateZ={20}
                  as="div" // Use a div for the CardItem wrapper
                  className="p-0 h-auto"
                >
                  <Button variant="link" className="p-0 h-auto text-primary font-semibold group-hover/card:underline">
                    Read More <ArrowRight className="ml-2 h-4 w-4 group-hover/card:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardItem>
                <button
                  onClick={handleBookmarkClick}
                  className={cn(
                    "p-2 rounded-full transition-colors z-10",
                    isBookmarkedState ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                  )}
                  aria-label={isBookmarkedState ? 'Remove bookmark' : 'Add bookmark'}
                >
                  <BookmarkIcon className={cn("h-5 w-5", isBookmarkedState ? "fill-current" : "")} />
                </button>
              </CardFooter>
            </div>
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default React.memo(ModuleCardComponent);
