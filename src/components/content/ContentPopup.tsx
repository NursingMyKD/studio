"use client";

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import MarkdownRenderer from "./MarkdownRenderer";
import type { ContentItem } from '@/types/content';
import { Loader2, AlertCircle } from 'lucide-react';

interface ContentPopupProps {
  slug: string;
  triggerText: React.ReactNode;
}

export default function ContentPopup({ slug, triggerText }: ContentPopupProps) {
  const [item, setItem] = useState<ContentItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && !item && slug) {
      const fetchContent = async () => {
        setIsLoading(true);
        setError(null);
        try {
          const response = await fetch(`/api/content/${slug}`);
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || `Error: ${response.status}`);
          }
          const data: ContentItem = await response.json();
          setItem(data);
        } catch (err: any) {
          console.error(`Failed to fetch content for slug ${slug}:`, err);
          setError(err.message || "Could not load content.");
          setItem(null);
        }
        setIsLoading(false);
      };
      fetchContent();
    }
  }, [isOpen, item, slug]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="text-primary hover:underline inline font-semibold">{triggerText}</button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh]">
        {isLoading && (
          <div className="flex items-center justify-center h-full">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
          </div>
        )}
        {error && !isLoading && (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <AlertCircle className="h-12 w-12 text-destructive mb-4" />
            <p className="text-destructive-foreground font-semibold">Error loading content</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        )}
        {!isLoading && !error && item && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-headline">{item.title}</DialogTitle>
            </DialogHeader>
            <ScrollArea className="h-[calc(90vh-100px)] pr-6 mt-4"> {/* Adjusted height for header */}
                {/* Pass the pageSlug to MarkdownRenderer for section bookmarking context */}
                <MarkdownRenderer content={item.generalOverview || ""} pageSlug={slug} />
                {item.inDepthConsiderations && (
                    <>
                        <hr className="my-6" />
                        <MarkdownRenderer content={item.inDepthConsiderations} pageSlug={slug} />
                    </>
                )}
            </ScrollArea>
          </>
        )}
        {!isLoading && !error && !item && isOpen && (
            <div className="flex flex-col items-center justify-center h-full text-center">
                <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Content not found.</p>
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
