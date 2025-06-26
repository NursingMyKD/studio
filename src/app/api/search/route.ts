// src/app/api/search/route.ts
import { NextResponse } from 'next/server';
import { searchContent } from '@/lib/data-access';
import { rateLimit } from '@/lib/rate-limit';

// Rate limit: 30 requests per minute
const rateLimiter = rateLimit({
  maxRequests: 30,
  windowMs: 60 * 1000, // 1 minute
});

export async function GET(request: Request) {
  // Check rate limit
  if (!rateLimiter(request)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (typeof query !== 'string') {
    return NextResponse.json({ error: 'Query parameter \'q\' must be a string' }, { status: 400 });
  }

  if (!query.trim()) {
    return NextResponse.json({ error: 'Query parameter \'q\' cannot be empty' }, { status: 400 });
  }

  // Sanitize query input
  const sanitizedQuery = query.trim().slice(0, 100); // Limit query length

  try {
    const results = await searchContent(sanitizedQuery);
    return NextResponse.json(results);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
