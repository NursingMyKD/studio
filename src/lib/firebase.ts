
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

// Your web app's Firebase configuration
// -----------------------------------------------------------------------------
// !! CRITICAL ACTION REQUIRED !!
// The error "auth/api-key-not-valid" means the apiKey below (and potentially
// other configuration values) is incorrect or a placeholder.
//
// You MUST replace "YOUR_API_KEY" (and other "YOUR_..." placeholders) with the
// actual values from your Firebase project's settings in the Firebase console.
//
// If you are using environment variables (e.g., process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
// ensure they are correctly set up in your development environment and that
// they are being correctly loaded into your application. The .env.local file
// is a common place for these in Next.js development.
// -----------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "YOUR_API_KEY", // <-- THIS NEEDS TO BE A VALID API KEY!
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "YOUR_APP_ID",
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);

export { app, auth, db };
