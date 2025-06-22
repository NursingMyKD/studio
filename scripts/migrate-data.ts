/* eslint-disable @typescript-eslint/no-var-requires */
// scripts/migrate-data.ts

/**
 * To execute this script, run the following command in your terminal:
 * npx tsx scripts/migrate-data.ts
 */

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { bodySystems, topics, policies } from '@/lib/data';
import type { ContentItem } from '@/types/content';

// IMPORTANT: Download your Firebase service account key JSON file
// and place it in your project root. Rename it to 'serviceAccountKey.json'.
// Ensure this file is added to your .gitignore to keep it private.
const serviceAccount = require('../serviceAccountKey.json');

// Initialize Firebase Admin SDK
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

async function processContentCategory(contentArray: ContentItem[], categoryName: string) {
  const contentCollection = db.collection('content');
  let batch = db.batch();
  let writeCount = 0;

  console.log(`Starting migration for ${categoryName} (${contentArray.length} documents)...`);

  for (let i = 0; i < contentArray.length; i++) {
    const item = contentArray[i];
    const docRef = contentCollection.doc(item.id);
    batch.set(docRef, item);
    writeCount++;

    if (writeCount === 499 || i === contentArray.length - 1) {
      console.log(`Committing batch of ${writeCount} documents for ${categoryName}...`);
      await batch.commit();
      batch = db.batch();
      writeCount = 0;
    }
  }
  console.log(`${categoryName} migration completed successfully!`);
}

async function migrateData() {
  await processContentCategory(bodySystems, 'Body Systems');
  await processContentCategory(topics, 'Topics');
  await processContentCategory(policies, 'Policies');

  console.log('All data migration completed successfully!');
}

migrateData().catch((error) => {
  console.error('Error migrating data:', error);
  process.exit(1);
});
