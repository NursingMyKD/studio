// scripts/set-admin.ts
import * as admin from 'firebase-admin';
import dotenv from 'dotenv';

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

const serviceAccountBase64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;

if (!serviceAccountBase64) {
  throw new Error('FIREBASE_SERVICE_ACCOUNT_BASE64 is not defined in .env.local');
}

const serviceAccountJson = Buffer.from(serviceAccountBase64, 'base64').toString('ascii');
const serviceAccount = JSON.parse(serviceAccountJson);

try {
    if (admin.apps.length === 0) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as any),
        });
    }
} catch (error) {
    console.error('Error initializing Firebase Admin SDK:', error);
    process.exit(1);
}


const emailToMakeAdmin = process.argv[2];

if (!emailToMakeAdmin) {
  console.error('Error: Please provide an email address as an argument.');
  console.log('Usage: npm run set-admin <email>');
  process.exit(1);
}

const setAdminClaim = async (email: string) => {
  try {
    const user = await admin.auth().getUserByEmail(email);
    if (user.customClaims && user.customClaims.admin === true) {
      console.log(`User ${email} is already an admin.`);
      return;
    }
    await admin.auth().setCustomUserClaims(user.uid, { admin: true });
    console.log(`Success! Custom claim 'admin' set for user: ${email}`);
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      console.error(`Error: User with email ${email} not found.`);
    } else {
      console.error('Error setting custom claim:', error);
    }
    process.exit(1);
  }
};

setAdminClaim(emailToMakeAdmin);
