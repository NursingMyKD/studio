const admin = require('firebase-admin');

if (!admin.apps.length) {
  admin.initializeApp();
}
const db = admin.firestore();

async function updateUsers() {
  const usersRef = db.collection('users');
  const snapshot = await usersRef.get();
  for (const doc of snapshot.docs) {
    const data = doc.data();
    const updates = {};
    if (!data.name) {
      if (data.email && data.email.includes('@')) {
        const [first, last] = data.email.split('@')[0].split('.');
        updates.name = `${capitalize(first)} ${capitalize(last || 'User')}`;
      } else {
        updates.name = 'Unknown User';
      }
    }
    if (!data.position) {
      updates.position = 'ICU Registered Nurse';
    }
    if ((updates.position === 'Assistant Nurse Manager' || data.position === 'Assistant Nurse Manager') && !data.manager) {
      updates.manager = 'Default Manager';
    }
    if (Object.keys(updates).length > 0) {
      await doc.ref.update(updates);
      console.log(`Updated user ${doc.id}:`, updates);
    }
  }
  console.log('User update complete.');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

updateUsers().catch(console.error);
