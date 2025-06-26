import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { allContentItems } from '../src/lib/data';
import { ContentItem } from '../src/types/content';
import * as fs from 'fs';
import * as path from 'path';

console.log('Starting script...');

try {
  // Path to your serviceAccountKey.json file
  const serviceAccountKeyPath = path.resolve(__dirname, '..', 'serviceAccountKey.json');
  console.log(`Service account key path: ${serviceAccountKeyPath}`);

  // Read and parse the service account key file
  const serviceAccountFile = fs.readFileSync(serviceAccountKeyPath, 'utf8');
  const serviceAccount = JSON.parse(serviceAccountFile);
  console.log('Service account key parsed successfully.');

  // Initialize Firebase Admin SDK
  if (!getApps().length) {
    console.log('Initializing Firebase Admin SDK...');
    initializeApp({
      credential: cert(serviceAccount),
    });
    console.log('Firebase Admin SDK initialized.');
  }

  const db = getFirestore();
  console.log('Firestore instance obtained.');

  async function addAllContent() {
    console.log('Starting to add all content...');
    const batch = db.batch();
    let operationCount = 0;

    allContentItems.forEach((item: ContentItem) => {
      const docRef = db.collection('content').doc(item.slug);
      batch.set(docRef, item);
      operationCount++;
      // console.log(`Adding ${item.slug} to the batch.`); // This can be too verbose
    });

    console.log(`Batch created with ${operationCount} operations.`);

    try {
      await batch.commit();
      console.log(`Successfully added/updated ${operationCount} content items in Firestore.`);
    } catch (error) {
      console.error('Error committing batch:', error);
      process.exit(1);
    }
  }

  addAllContent();

} catch (error) {
  console.error('An unexpected error occurred:', error);
  process.exit(1);
}
