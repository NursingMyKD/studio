
"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ContentPopup from './ContentPopup';

interface MarkdownRendererProps {
  content: string;
}

// Regex to check if a URL is an internal slug link (starts with / and not //)
const internalLinkRegex = /^\/(?!\/)/;

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {

  const components = {
    a: ({ node, ...props }: any) => {
      const href = props.href || '';
      
      // Check if it's an internal link to a content item slug
      if (internalLinkRegex.test(href)) {
        // Strip the leading '/' to get the slug
        const slug = href.substring(1);
        return <ContentPopup slug={slug} triggerText={props.children} />;
      }
      
      // It's a standard external link, render it to open in a new tab
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
