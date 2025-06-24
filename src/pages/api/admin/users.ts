import type { NextApiRequest, NextApiResponse } from 'next';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, applicationDefault, cert, getApps } from 'firebase-admin/app';

// Helper to initialize Firebase Admin SDK
function getAdminApp() {
  if (!getApps().length) {
    const serviceAccountBase64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
    if (!serviceAccountBase64) throw new Error('Missing service account env');
    const serviceAccount = JSON.parse(Buffer.from(serviceAccountBase64, 'base64').toString('utf8'));
    initializeApp({ credential: cert(serviceAccount) });
  }
}

async function verifyAdmin(req: NextApiRequest) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return false;
  const token = authHeader.replace('Bearer ', '');
  const { getAuth } = await import('firebase-admin/auth');
  const decoded = await getAuth().verifyIdToken(token);
  return !!decoded.admin;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  getAdminApp();
  if (!(await verifyAdmin(req))) return res.status(403).json({ error: 'Forbidden' });

  if (req.method === 'GET') {
    const users = await getAuth().listUsers();
    return res.json(users.users.map(u => ({
      uid: u.uid,
      email: u.email,
      admin: u.customClaims?.admin || false,
    })));
  }
  res.status(405).end();
}
