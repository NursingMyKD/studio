import { adminDb } from '../src/lib/firebase-admin';
import { ContentItem } from '../src/types/content';

async function getTopicBySlug(slug: string): Promise<ContentItem | null> {
  try {
    const db = adminDb;
    console.log(`Attempting to fetch topic with slug: ${slug}`);

    const topicRef = db.collection('content').doc(slug);
    const doc = await topicRef.get();

    if (!doc.exists) {
      console.log('No document found for this slug.');
      return null;
    }

    const data = doc.data();
    console.log('Document data found:', data);

    // Validate the structure of the data
    if (!data || typeof data.title !== 'string') {
        console.error("Invalid data structure received from Firestore:", data);
        return null;
    }

    return {
      id: doc.id,
      slug: doc.id,
      ...data,
    } as ContentItem;

  } catch (error) {
    console.error("Error fetching topic from Firestore:", error);
    // Make sure to re-throw or handle the error as appropriate
    throw error;
  }
}

async function main() {
  const slug = process.argv[2];
  if (!slug) {
    console.error("Please provide a slug as a command-line argument.");
    process.exit(1);
  }

  try {
    const topic = await getTopicBySlug(slug);
    if (topic) {
      console.log("Successfully fetched topic:", JSON.stringify(topic, null, 2));
    } else {
      console.log(`Could not find or validate topic with slug: ${slug}`);
    }
  } catch (error) {
    console.error(`An error occurred while running the script for slug "${slug}":`, error);
    process.exit(1);
  }
}

main();
