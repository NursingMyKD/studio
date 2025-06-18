
"use client";

import { useState, useEffect, useCallback } from 'react';
import type { ContentItem } from '@/types/content';
import { bodySystems, topics, policies } from '@/lib/data'; // Assuming these are the full arrays

const allContentItems: ContentItem[] = [...bodySystems, ...topics, ...policies];

const BOOKMARKS_STORAGE_KEY = 'icuHubBookmarks';

export function useBookmarks() {
  const [bookmarkedSlugs, setBookmarkedSlugs] = useState<Set<string>>(new Set());
  const [bookmarkedItems, setBookmarkedItems] = useState<ContentItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedSlugs = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (storedSlugs) {
        setBookmarkedSlugs(new Set(JSON.parse(storedSlugs)));
      }
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(Array.from(bookmarkedSlugs)));
      
      const items = allContentItems.filter(item => bookmarkedSlugs.has(item.slug));
      setBookmarkedItems(items);
    }
  }, [bookmarkedSlugs, isLoaded]);

  const addBookmark = useCallback((slug: string) => {
    setBookmarkedSlugs(prevSlugs => {
      const newSlugs = new Set(prevSlugs);
      newSlugs.add(slug);
      return newSlugs;
    });
  }, []);

  const removeBookmark = useCallback((slug: string) => {
    setBookmarkedSlugs(prevSlugs => {
      const newSlugs = new Set(prevSlugs);
      newSlugs.delete(slug);
      return newSlugs;
    });
  }, []);

  const isBookmarked = useCallback((slug: string) => {
    return bookmarkedSlugs.has(slug);
  }, [bookmarkedSlugs]);

  const toggleBookmark = useCallback((slug: string) => {
    if (isBookmarked(slug)) {
      removeBookmark(slug);
    } else {
      addBookmark(slug);
    }
  }, [isBookmarked, addBookmark, removeBookmark]);

  return { bookmarkedItems, bookmarkedSlugs, addBookmark, removeBookmark, isBookmarked, toggleBookmark, isLoaded };
}
