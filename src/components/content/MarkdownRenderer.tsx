
"use client";

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ContentPopup from './ContentPopup';
import { useBookmarks } from '@/hooks/useBookmarks';
import { Button } from '@/components/ui/button';
import { Bookmark as BookmarkIcon } from 'lucide-react';
import { cn, slugify } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  pageSlug: string; // To know which page we're on for bookmarking
}

const internalLinkRegex = /^\/(?!\/)/;

export default function MarkdownRenderer({ content, pageSlug }: MarkdownRendererProps) {
  const { isBookmarked, toggleBookmark, isLoaded } = useBookmarks();

  const components = {
    h2: ({ node, ...props }: any) => {
      const headingText = node.children.map((child: any) => child.value || '').join('');
      const sectionSlug = slugify(headingText);
      
      if (!headingText || !sectionSlug) {
        return <h2 {...props} />;
      }
      
      const bookmarked = isBookmarked(pageSlug, sectionSlug);
      
      return (
        <div className="group relative mt-8 mb-4">
          <h2 id={sectionSlug} {...props} className="scroll-mt-20" />
          {isLoaded && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => toggleBookmark(pageSlug, sectionSlug)}
              aria-label={bookmarked ? "Remove section bookmark" : "Add section bookmark"}
              className="absolute -left-12 top-0 opacity-0 group-hover:opacity-100 focus-within:opacity-100 transition-opacity hidden md:inline-flex"
            >
              <BookmarkIcon className={cn("h-5 w-5", bookmarked ? "fill-primary text-primary" : "text-muted-foreground")} />
            </Button>
          )}
        </div>
      );
    },
    a: ({ node, ...props }: any) => {
      const href = props.href || '';
      
      if (internalLinkRegex.test(href)) {
        const slug = href.substring(1);
        return <ContentPopup slug={slug} triggerText={props.children} />;
      }
      
      return <a {...props} target="_blank" rel="noopener noreferrer" />;
    },
  };

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown components={components} remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
