// src/app/api/content/[slug]/route.ts
import { NextResponse } from 'next/server';
import { getContentItemBySlug } from '@/lib/data-access';
import { rateLimit } from '@/lib/rate-limit';

// Rate limit: 60 requests per minute
const rateLimiter = rateLimit({
  maxRequests: 60,
  windowMs: 60 * 1000, // 1 minute
});

interface Params {
  slug: string;
}

export async function GET(request: Request, { params }: { params: Promise<Params> }) {
  // Check rate limit
  if (!rateLimiter(request)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    // Sanitize slug input
    const sanitizedSlug = slug.trim().toLowerCase().replace(/[^a-z0-9-]/g, '');
    
    if (!sanitizedSlug) {
      return NextResponse.json({ error: 'Invalid slug format' }, { status: 400 });
    }

    console.log(`Fetching content for slug: ${sanitizedSlug}`);
    const item = await getContentItemBySlug(sanitizedSlug);
    
    if (!item) {
      console.log(`Content not found for slug: ${sanitizedSlug}`);
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }
    
    console.log(`Successfully fetched content for slug: ${sanitizedSlug}`);
    return NextResponse.json(item);
  } catch (error) {
    console.error(`Error in /api/content/[slug] route:`, error);
    // Generic error message for security
    return NextResponse.json({ 
      error: 'Internal Server Error'
    }, { status: 500 });
  }
}
