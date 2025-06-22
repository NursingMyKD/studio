import { clerkMiddleware } from '@clerk/nextjs/server';

export default function middleware(req) {
  console.log('Clerk middleware running for:', req.nextUrl.pathname);
  return clerkMiddleware()(req);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|login|signup|public).*)',
  ],
};