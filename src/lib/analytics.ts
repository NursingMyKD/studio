import { auth, db } from './firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function logAnalyticsEvent(eventType: string, details: Record<string, any> = {}) {
  try {
    const user = auth.currentUser;
    await addDoc(collection(db, 'analytics_events'), {
      eventType,
      details,
      userId: user ? user.uid : null,
      email: user ? user.email : null,
      timestamp: serverTimestamp(),
    });
  } catch (e) {
    // Optionally log error
    // console.error('Failed to log analytics event', e);
  }
}
