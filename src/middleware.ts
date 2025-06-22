import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protect all routes in (app) except for public ones
    '/((?!api|_next/static|_next/image|favicon.ico|login|signup|public).*)',
  ],
};
