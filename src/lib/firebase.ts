
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
// Go to: Firebase Console -> Project Settings (gear icon) -> General tab -> Scroll down to "Your apps" -> Select your web app.
//
// If you are using environment variables (e.g., process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
// ensure they are correctly set up in your development environment (e.g., in a .env.local file)
// and that they are being correctly loaded into your application.
// The .env.local file should look something like this:
// NEXT_PUBLIC_FIREBASE_API_KEY=your_actual_api_key_here
// NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_actual_auth_domain_here
// NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_actual_project_id_here
// ...and so on for all firebaseConfig values.
// -----------------------------------------------------------------------------
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "YOUR_API_KEY", // <-- REPLACE THIS WITH YOUR ACTUAL API KEY!
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "YOUR_AUTH_DOMAIN", // <-- REPLACE THIS!
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID", // <-- REPLACE THIS!
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "YOUR_STORAGE_BUCKET", // <-- REPLACE THIS!
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "YOUR_MESSAGING_SENDER_ID", // <-- REPLACE THIS!
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "YOUR_APP_ID", // <-- REPLACE THIS!
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
