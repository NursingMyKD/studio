// src/app/api/content/[slug]/route.ts
import { NextResponse } from 'next/server';
import { getContentItemBySlug } from '@/lib/firebase-admin';

interface Params {
  slug: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  const slug = params.slug;

  if (!slug) {
    return NextResponse.json({ error: 'Slug parameter is required' }, { status: 400 });
  }

  try {
    const item = await getContentItemBySlug(slug);
    if (!item) {
      return NextResponse.json({ error: 'Content not found' }, { status: 404 });
    }
    return NextResponse.json(item);
  } catch (error) {
    console.error(`Error fetching content for slug ${slug}:`, error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
