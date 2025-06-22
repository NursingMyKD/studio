# SEO & Metadata Improvements

## 1. Add dynamic metadata generation
```tsx
// Example for content pages
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const content = getContentItemBySlug(params.slug);
  
  if (!content) {
    return {
      title: 'Content Not Found - ICU Hub',
    };
  }

  return {
    title: `${content.title} - ICU Hub`,
    description: content.summary,
    keywords: `ICU, nursing, ${content.categoryType.toLowerCase()}, critical care, ${content.keywordsForImage}`,
    openGraph: {
      title: content.title,
      description: content.summary,
      type: 'article',
      url: `https://yourdomain.com/${content.categoryType.toLowerCase().replace(' ', '-')}/${content.slug}`,
    },
  };
}
```

## 2. Add structured data
- Schema.org markup for educational content
- Course/Article structured data

## 3. Sitemap generation
- Dynamic sitemap for all content
- Proper robots.txt

## 4. Performance optimizations
- Add proper caching headers
- Implement service worker for offline functionality
- Optimize Core Web Vitals
