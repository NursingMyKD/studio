export interface ContentItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string; // Can be simple text or Markdown
  categoryType: 'Body System' | 'Topic' | 'Policy';
  keywordsForImage?: string; // For data-ai-hint
}
