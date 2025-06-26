// src/app/api/bookmarks/route.ts
import { NextResponse } from 'next/server';
import { getBookmarkedContent } from '@/lib/data-access';
import { rateLimit } from '@/lib/rate-limit';
import type { ContentItem } from '@/types/content';

// Rate limit: 20 requests per minute
const rateLimiter = rateLimit({
  maxRequests: 20,
  windowMs: 60 * 1000, // 1 minute
});

export async function POST(request: Request) {
  // Check rate limit
  if (!rateLimiter(request)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const { contentIds } = await request.json();

    if (!Array.isArray(contentIds) || !contentIds.every(id => typeof id === 'string')) {
      return NextResponse.json({ error: 'Invalid input format' }, { status: 400 });
    }

    // Limit the number of bookmarks to prevent abuse
    if (contentIds.length > 50) {
      return NextResponse.json({ error: 'Too many bookmarks requested' }, { status: 400 });
    }

    if (contentIds.length === 0) {
      return NextResponse.json([]); // No bookmarks, return empty array
    }
    
    // Sanitize content IDs
    const sanitizedIds = contentIds
      .map(id => id.trim().toLowerCase().replace(/[^a-z0-9-]/g, ''))
      .filter(id => id.length > 0);
    
    const results: ContentItem[] = await getBookmarkedContent(sanitizedIds);
    return NextResponse.json(results);

  } catch (error: any) {
    console.error('Bookmarks API error:', error);
    // Check if the error is due to JSON parsing for a more specific message
    if (error instanceof SyntaxError) {
        return NextResponse.json({ error: 'Invalid request format' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
