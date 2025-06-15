
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwb39r6FKeuyE3LTCp8q8UDOtVOhQJQXM",
  authDomain: "iculearninghub-ce796.firebaseapp.com",
  projectId: "iculearninghub-ce796",
  storageBucket: "iculearninghub-ce796.appspot.com",
  messagingSenderId: "563216703596",
  appId: "1:563216703596:web:7019c4006a26a3d7cd7849",
  measurementId: "G-GD7C2CWTMN"
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
