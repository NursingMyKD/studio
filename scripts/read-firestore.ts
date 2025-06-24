import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const serviceAccountBase64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
if (!serviceAccountBase64) throw new Error('Missing service account env');
const serviceAccount = JSON.parse(Buffer.from(serviceAccountBase64, 'base64').toString('utf8'));

if (!getApps().length) {
  initializeApp({ credential: cert(serviceAccount) });
}

const db = getFirestore();

async function readCollection(collectionName: string) {
  const snapshot = await db.collection(collectionName).get();
  console.log(`Documents in '${collectionName}':`);
  snapshot.forEach(doc => {
    console.log(doc.id, doc.data());
  });
}

// Change 'content' to your collection name if needed
readCollection('content').then(() => process.exit(0));
