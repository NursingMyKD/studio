import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Protect all routes in (app) except for public ones
    '/((?!api|_next/static|_next/image|favicon.ico|login|signup|public).*)',
  ],
};
