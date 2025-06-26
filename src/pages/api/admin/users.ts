import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, applicationDefault, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { rateLimit } from '@/lib/rate-limit';

// Rate limit: 10 requests per minute for admin operations
const rateLimiter = rateLimit({
  maxRequests: 10,
  windowMs: 60 * 1000, // 1 minute
});

// Helper to initialize Firebase Admin SDK
function getAdminApp() {
  if (!getApps().length) {
    const serviceAccountBase64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
    if (!serviceAccountBase64) throw new Error('Missing service account configuration');
    const serviceAccount = JSON.parse(Buffer.from(serviceAccountBase64, 'base64').toString('utf8'));
    initializeApp({ credential: cert(serviceAccount) });
  }
}

async function verifyAdmin(req: NextApiRequest) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return false;
  const token = authHeader.replace('Bearer ', '');
  
  try {
    const { getAuth } = await import('firebase-admin/auth');
    const decoded = await getAuth().verifyIdToken(token);
    return !!decoded.admin;
  } catch (error) {
    console.error('Admin verification failed:', error);
    return false;
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Check rate limit
  if (!rateLimiter(req as any)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  try {
    getAdminApp();
    if (!(await verifyAdmin(req))) {
      return res.status(403).json({ error: 'Access denied' });
    }

    if (req.method === 'GET') {
      const users = await getAuth().listUsers();
      const db = getFirestore();
      // Fetch Firestore user profiles in parallel
      const userProfiles = await Promise.all(users.users.map(async (u) => {
        let profile = {};
        try {
          const doc = await db.collection('users').doc(u.uid).get();
          if (doc.exists) {
            profile = doc.data() || {};
          }
        } catch (e) {}
        return {
          uid: u.uid,
          email: u.email,
          admin: u.customClaims?.admin || false,
          name: (profile as any).name || '',
          position: (profile as any).position || '',
          manager: (profile as any).manager || '',
        };
      }));
      return res.json(userProfiles);
    }
    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Admin users API error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
