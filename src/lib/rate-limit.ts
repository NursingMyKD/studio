// Rate limiting utility for API routes
const requestCounts = new Map<string, { count: number; timestamp: number }>();

interface RateLimitOptions {
  maxRequests: number;
  windowMs: number;
}

export function rateLimit(options: RateLimitOptions) {
  return (request: Request): boolean => {
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';
    
    const now = Date.now();
    const windowStart = now - options.windowMs;
    
    // Get current count for this IP
    const current = requestCounts.get(ip);
    
    // Clean up old entries
    if (current && current.timestamp < windowStart) {
      requestCounts.delete(ip);
    }
    
    // Check if IP exists and is within window
    if (current && current.timestamp >= windowStart) {
      if (current.count >= options.maxRequests) {
        return false; // Rate limit exceeded
      }
      current.count += 1;
    } else {
      // New IP or outside window
      requestCounts.set(ip, { count: 1, timestamp: now });
    }
    
    return true; // Request allowed
  };
}

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  const oneHour = 60 * 60 * 1000;
  
  for (const [ip, data] of requestCounts.entries()) {
    if (now - data.timestamp > oneHour) {
      requestCounts.delete(ip);
    }
  }
}, 5 * 60 * 1000); // Clean up every 5 minutes
