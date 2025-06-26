import type { NextApiRequest, NextApiResponse } from 'next';
import { getFirestore } from 'firebase-admin/firestore';
import { adminAuth } from '@/lib/firebase-admin';
import { rateLimit } from '@/lib/rate-limit';

// Rate limit: 10 requests per minute for admin operations
const rateLimiter = rateLimit({
  maxRequests: 10,
  windowMs: 60 * 1000, // 1 minute
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check rate limit
  if (!rateLimiter(req as any)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const db = getFirestore();

  try {
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) return res.status(401).json({ error: 'Authentication required' });
    
    const decoded = await adminAuth.verifyIdToken(token);
    if (!decoded.admin) return res.status(403).json({ error: 'Access denied' });

    // Get all users
    const usersSnap = await db.collection('users').get();
    const users = usersSnap.docs.map(doc => doc.data());
    const totalUsers = users.length;
    const totalAdmins = users.filter(u => u.admin).length;

    // Get analytics events
    const eventsSnap = await db.collection('analytics_events').get();
    const events = eventsSnap.docs.map(doc => doc.data());

    // Most visited module
    const moduleVisits: Record<string, number> = {};
    let totalTime = 0;
    let timeCount = 0;
    for (const e of events) {
      if (e.eventType === 'page_view' && e.details?.path?.startsWith('/body-systems/')) {
        const slug = e.details.path;
        moduleVisits[slug] = (moduleVisits[slug] || 0) + 1;
      }
      if (e.eventType === 'time_spent' && typeof e.details?.duration === 'number') {
        totalTime += e.details.duration;
        timeCount++;
      }
    }
    let mostVisitedModule = null;
    let maxVisits = 0;
    for (const [slug, count] of Object.entries(moduleVisits)) {
      if (count > maxVisits) {
        mostVisitedModule = slug;
        maxVisits = count;
      }
    }
    const avgTimeSpent = timeCount > 0 ? totalTime / timeCount : null;

    res.status(200).json({
      totalUsers,
      totalAdmins,
      mostVisitedModule,
      avgTimeSpent,
    });
  } catch (e) {
    console.error('Admin analytics API error:', e);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
