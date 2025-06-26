// Security middleware for Next.js
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Add security headers (fallback if not set in next.config.ts)
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('X-XSS-Protection', '1; mode=block');

  // Protect admin routes
  if (request.nextUrl.pathname.startsWith('/admin-dashboard')) {
    // Additional checks could be added here
    // For now, we rely on the withAdminAuth HOC
  }

  // Protect API routes from certain methods
  if (request.nextUrl.pathname.startsWith('/api/')) {
    // Block potentially dangerous methods
    if (['TRACE', 'TRACK', 'CONNECT'].includes(request.method)) {
      return new NextResponse('Method Not Allowed', { status: 405 });
    }
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
