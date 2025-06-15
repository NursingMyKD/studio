export interface ContentItem {
  id: string;
  slug: string;
  title: string;
  summary: string;
  generalOverview: string; // Can be simple text or Markdown
  inDepthConsiderations: string; // Can be simple text or Markdown
  categoryType: 'Body System' | 'Topic' | 'Policy';
  keywordsForImage?: string; // For data-ai-hint
}
