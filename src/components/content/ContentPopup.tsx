"use client";

import React, { useState, useEffect } from 'react';
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
    // When the dialog is closed, reset the state
    if (!isOpen) {
      setItem(null);
      setError(null);
      setIsLoading(false);
      return;
    }

    // When the dialog is open, fetch content if we don't have it
    if (isOpen && !item && slug) {
      const fetchContent = async () => {
        setIsLoading(true);
        setError(null);
        try {
          // Sanitize slug before making request
          const sanitizedSlug = slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
          if (!sanitizedSlug) {
            throw new Error('Invalid content identifier');
          }

          const response = await fetch(`/api/content/${encodeURIComponent(sanitizedSlug)}`);
          if (!response.ok) {
            let errorMessage = 'Failed to load content';
            if (response.status === 404) {
              errorMessage = 'Content not found';
            } else if (response.status === 429) {
              errorMessage = 'Too many requests. Please try again later.';
            } else if (response.status >= 500) {
              errorMessage = 'Server error. Please try again later.';
            }
            
            // Try to get more specific error from response
            try {
              const errorData = await response.json();
              if (errorData.error && typeof errorData.error === 'string') {
                errorMessage = errorData.error;
              }
            } catch {
              // If response is not JSON, use the generic message
            }
            throw new Error(errorMessage);
          }
          const data: ContentItem = await response.json();
          
          // Basic validation of received data
          if (!data || typeof data !== 'object' || !data.title) {
            throw new Error('Invalid content received');
          }
          
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

  const trigger = React.isValidElement(triggerText)
    ? triggerText
    : <button className="text-primary hover:underline inline font-semibold">{triggerText}</button>;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">
            {isLoading ? "Loading..." : error ? "Error" : item ? item.title : "Content not found"}
          </DialogTitle>
        </DialogHeader>
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
          <ScrollArea className="h-[calc(90vh-100px)] pr-6 mt-4">
            <div className="space-y-6">
              {item.generalOverview && (
                <section>
                  <h2 className="text-xl font-semibold font-headline mb-3 text-primary/90 border-b pb-2">
                    General Overview
                  </h2>
                  <MarkdownRenderer content={item.generalOverview} pageSlug={slug} />
                </section>
              )}

              {item.inDepthConsiderations && (
                <section>
                  <h2 className="text-xl font-semibold font-headline mb-3 text-primary/90 border-b pb-2">
                    In-Depth Considerations
                  </h2>
                  <MarkdownRenderer content={item.inDepthConsiderations} pageSlug={slug} />
                </section>
              )}

              {!item.generalOverview && !item.inDepthConsiderations && (
                <div className="text-center text-muted-foreground py-10">
                  <p>No detailed content available for this topic.</p>
                </div>
              )}
            </div>
          </ScrollArea>
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
