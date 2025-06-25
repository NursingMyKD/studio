// src/lib/firebase-admin.ts
import admin from 'firebase-admin';
import fs from 'fs';
import path from 'path';

if (!admin.apps.length) {
  const serviceAccountKeyEnv = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
  const serviceAccountPath = path.resolve(process.cwd(), 'serviceAccountKey.json');

  try {
    if (serviceAccountKeyEnv) {
      // Priority 1: Use environment variable (production, CI/CD)
      const serviceAccount = JSON.parse(serviceAccountKeyEnv);
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } else if (fs.existsSync(serviceAccountPath)) {
      // Priority 2: Use local file (local development)
      const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
      });
    } else {
      // Priority 3: Use default credentials (for GCloud environments like Cloud Run, Functions)
      admin.initializeApp();
    }
  } catch (error) {
    console.error('Firebase Admin SDK initialization error:', error);
    if (serviceAccountKeyEnv) {
      console.error('Failed to initialize with FIREBASE_SERVICE_ACCOUNT_KEY. Check if it is a valid JSON.');
    } else if (fs.existsSync(serviceAccountPath)) {
      console.error('Failed to initialize with serviceAccountKey.json. Check if it is a valid JSON.');
    } else {
      console.error('Failed to initialize with default credentials. Ensure the environment is configured correctly.');
    }
  }
}

const adminDb = admin.firestore();
const adminAuth = admin.auth();

export { adminDb, adminAuth };

