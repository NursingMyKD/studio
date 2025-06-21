
"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import MarkdownRenderer from "./MarkdownRenderer";
import type { ContentItem } from '@/types/content';
import { bodySystems, topics, policies } from '@/lib/data';

const allContent: ContentItem[] = [...bodySystems, ...topics, ...policies];

interface ContentPopupProps {
  slug: string;
  triggerText: React.ReactNode;
}

export default function ContentPopup({ slug, triggerText }: ContentPopupProps) {
  const item = allContent.find(i => i.slug === slug);

  if (!item) {
    return <span className="text-muted-foreground italic">(Content for {slug} not found)</span>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-primary hover:underline inline font-semibold">{triggerText}</button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-headline">{item.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-full pr-6">
            <MarkdownRenderer content={item.generalOverview} />
            <MarkdownRenderer content={item.inDepthConsiderations} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
