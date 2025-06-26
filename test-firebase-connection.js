// Firebase connectivity test
import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCwb39r6FKeuyE3LTCp8q8UDOtVOhQJQXM",
  authDomain: "iculearninghub-ce796.firebaseapp.com",
  projectId: "iculearninghub-ce796",
  storageBucket: "iculearninghub-ce796.appspot.com",
  messagingSenderId: "563216703596",
  appId: "1:563216703596:web:7019c4006a26a3d7cd7849",
  measurementId: "G-GD7C2CWTMN"
};

async function testFirebaseConnection() {
  try {
    console.log('Testing Firebase connection...');
    
    const app = initializeApp(firebaseConfig);
    console.log('✅ Firebase app initialized successfully');
    
    const auth = getAuth(app);
    console.log('✅ Firebase Auth initialized successfully');
    
    const db = getFirestore(app);
    console.log('✅ Firestore initialized successfully');
    
    // Test network connectivity
    const response = await fetch('https://firebase.googleapis.com/');
    if (response.ok) {
      console.log('✅ Network connectivity to Firebase APIs is working');
    } else {
      console.log('❌ Network connectivity issue to Firebase APIs');
    }
    
  } catch (error) {
    console.error('❌ Firebase connection test failed:', error);
  }
}

testFirebaseConnection();
