import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { allContentItems } from '../src/lib/data';
import { ContentItem } from '../src/types/content';

// Decode the base64 encoded service account key
const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT
  ? Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT, 'base64').toString('utf-8')
  : '{}';

if (!serviceAccountJson || serviceAccountJson === '{}') {
  console.error('FIREBASE_SERVICE_ACCOUNT environment variable is not set or is empty.');
  process.exit(1);
}

const serviceAccount = JSON.parse(serviceAccountJson);

// Initialize Firebase Admin SDK
if (!getApps().length) {
  initializeApp({
    credential: cert(serviceAccount),
  });
}

const db = getFirestore();

async function addAllContent() {
  const contentCollection = db.collection('content');
  let successCount = 0;
  let errorCount = 0;

  console.log(`Starting to process ${allContentItems.length} content items...`);

  for (const item of allContentItems) {
    try {
      const { id, slug, title, summary, generalOverview, inDepthConsiderations, categoryType, keywordsForImage } = item;
      
      const contentData: ContentItem = {
        id,
        slug,
        title,
        summary,
        generalOverview,
        inDepthConsiderations,
        categoryType,
        keywordsForImage,
      };

      await contentCollection.doc(slug).set(contentData);
      console.log(`Successfully added/updated content for slug: ${slug}`);
      successCount++;
    } catch (error) {
      console.error(`Error processing content for slug: ${item.slug}`, error);
      errorCount++;
    }
  }

  console.log('\n--- Content Update Summary ---');
  console.log(`Successfully added/updated: ${successCount} items`);
  console.log(`Failed to add/update: ${errorCount} items`);
  console.log('--------------------------------');
}

addAllContent().then(() => {
  console.log('Finished processing all content.');
}).catch(error => {
  console.error('An unexpected error occurred:', error);
});
