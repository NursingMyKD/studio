// src/app/api/bookmarks/route.ts
import { NextResponse } from 'next/server';
import { getBookmarkedContent } from '@/lib/firebase-admin';
import type { ContentItem } from '@/types/content';

export async function POST(request: Request) {
  try {
    const { contentIds } = await request.json();

    if (!Array.isArray(contentIds) || !contentIds.every(id => typeof id === 'string')) {
      return NextResponse.json({ error: 'Invalid input: contentIds must be an array of strings' }, { status: 400 });
    }

    if (contentIds.length === 0) {
      return NextResponse.json([]); // No bookmarks, return empty array
    }
    
    // Firestore 'in' query supports up to 30 equality clauses.
    // The getBookmarkedContent function already handles chunking if necessary.
    const results: ContentItem[] = await getBookmarkedContent(contentIds);
    return NextResponse.json(results);

  } catch (error: any) {
    console.error('Bookmarks API error:', error);
    // Check if the error is due to JSON parsing for a more specific message
    if (error instanceof SyntaxError) {
        return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
