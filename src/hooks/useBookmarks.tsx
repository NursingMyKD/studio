
"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import type { ContentItem } from '@/types/content';
import { bodySystems, topics, policies, getContentItemBySlug } from '@/lib/data';

const allContentItems: ContentItem[] = [...bodySystems, ...topics, ...policies];

const BOOKMARKS_STORAGE_KEY = 'icuHubBookmarks_v2';

// New data structure: { pageSlug: [sectionSlug1, sectionSlug2, ...] }
export type BookmarkData = Record<string, string[]>;
export const PAGE_BOOKMARK_SLUG = '__PAGE__';

export function useBookmarks() {
  const [bookmarks, setBookmarks] = useState<BookmarkData>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedData = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
        if (storedData) {
          setBookmarks(JSON.parse(storedData));
        }
      } catch (error) {
        console.error("Failed to parse bookmarks from localStorage", error);
        setBookmarks({});
      }
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks));
    }
  }, [bookmarks, isLoaded]);

  const toggleBookmark = useCallback((pageSlug: string, sectionSlug: string = PAGE_BOOKMARK_SLUG) => {
    setBookmarks(prev => {
      const newBookmarks = JSON.parse(JSON.stringify(prev));
      const pageBookmarks = new Set(newBookmarks[pageSlug] || []);

      if (pageBookmarks.has(sectionSlug)) {
        pageBookmarks.delete(sectionSlug);
      } else {
        pageBookmarks.add(sectionSlug);
      }

      if (pageBookmarks.size === 0) {
        delete newBookmarks[pageSlug];
      } else {
        newBookmarks[pageSlug] = Array.from(pageBookmarks);
      }
      
      return newBookmarks;
    });
  }, []);

  const isBookmarked = useCallback((pageSlug: string, sectionSlug: string = PAGE_BOOKMARK_SLUG) => {
    return bookmarks[pageSlug]?.includes(sectionSlug) ?? false;
  }, [bookmarks]);

  const bookmarkedPages = useMemo(() => {
    const pageSlugs = Object.keys(bookmarks);
    return allContentItems.filter(item => pageSlugs.includes(item.slug));
  }, [bookmarks]);

  const getBookmarkedSectionsForPage = useCallback((pageSlug: string) => {
      const sections = bookmarks[pageSlug]?.filter(s => s !== PAGE_BOOKMARK_SLUG) || [];
      return sections;
  }, [bookmarks]);

  const bookmarkedItems = useMemo(() => {
     return bookmarkedPages;
  }, [bookmarkedPages]);

  return { 
    bookmarks, 
    toggleBookmark, 
    isBookmarked, 
    bookmarkedPages, 
    getBookmarkedSectionsForPage,
    bookmarkedItems, // For backward compatibility with some components if needed
    isLoaded 
  };
}
