import { getFirestore } from 'firebase-admin/firestore';
import admin from 'firebase-admin';

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp();
}
const db = getFirestore();

async function updateUsers() {
  const usersRef = db.collection('users');
  const snapshot = await usersRef.get();
  for (const doc of snapshot.docs) {
    const data = doc.data();
    // Only update if missing fields
    const updates: any = {};
    if (!data.name) {
      // Try to infer name from email, else set placeholder
      if (data.email && data.email.includes('@')) {
        const [first, last] = data.email.split('@')[0].split('.');
        updates.name = `${capitalize(first)} ${capitalize(last || 'User')}`;
      } else {
        updates.name = 'Unknown User';
      }
    }
    if (!data.position) {
      updates.position = 'ICU Registered Nurse'; // Default
    }
    if (updates.position === 'Assistant Nurse Manager' && !data.manager) {
      updates.manager = 'Default Manager';
    }
    if (Object.keys(updates).length > 0) {
      await doc.ref.update(updates);
      console.log(`Updated user ${doc.id}:`, updates);
    }
  }
  console.log('User update complete.');
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

updateUsers().catch(console.error);
