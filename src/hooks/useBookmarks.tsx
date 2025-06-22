"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';

const BOOKMARKS_STORAGE_KEY = 'icuHubBookmarks_v2';

// Data structure: { pageSlug: [sectionSlug1, sectionSlug2, ...] }
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
      const newBookmarks = JSON.parse(JSON.stringify(prev)); // Deep copy
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

  // Returns an array of page slugs that have any bookmarks (page itself or sections)
  const bookmarkedPageSlugs = useMemo(() => {
    return Object.keys(bookmarks).filter(pageSlug => bookmarks[pageSlug] && bookmarks[pageSlug].length > 0);
  }, [bookmarks]);

  const getBookmarkedSectionsForPage = useCallback((pageSlug: string): string[] => {
      const sections = bookmarks[pageSlug]?.filter(s => s !== PAGE_BOOKMARK_SLUG) || [];
      return sections;
  }, [bookmarks]);

  // bookmarkedItems now returns slugs, consistent with bookmarkedPageSlugs
  // Components needing full item details should fetch them using these slugs.
  const bookmarkedItemsSlugs = useMemo(() => {
     return bookmarkedPageSlugs;
  }, [bookmarkedPageSlugs]);

  return { 
    bookmarks, 
    toggleBookmark, 
    isBookmarked, 
    bookmarkedPageSlugs, // Renamed from bookmarkedPages for clarity
    getBookmarkedSectionsForPage,
    bookmarkedItemsSlugs, // Renamed from bookmarkedItems for clarity
    isLoaded 
  };
}
