// src/app/api/search/route.ts
import { NextResponse } from 'next/server';
import { searchContent } from '@/lib/firebase-admin';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (typeof query !== 'string') {
    return NextResponse.json({ error: 'Query parameter \'q\' must be a string' }, { status: 400 });
  }

  if (!query.trim()) {
    return NextResponse.json({ error: 'Query parameter \'q\' cannot be empty' }, { status: 400 });
  }

  try {
    const results = await searchContent(query);
    return NextResponse.json(results);
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
