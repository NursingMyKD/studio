// scripts/add-missing-content.ts
import { adminDb } from '../src/lib/firebase-admin';
import { ContentItem } from '../src/types/content';

const missingContent: Omit<ContentItem, 'id'>[] = [
  {
    slug: 'intra-aortic-balloon-pump',
    title: 'Intra-Aortic Balloon Pump (IABP)',
    summary: 'A temporary mechanical circulatory support device used to help the heart pump blood.',
    categoryType: 'Topic',
    generalOverview: `
### General Overview

The Intra-Aortic Balloon Pump (IABP) is a mechanical circulatory support device that helps the heart pump more blood. It is used for patients with cardiogenic shock, acute myocardial infarction, and other severe heart conditions.

The device consists of a polyethylene balloon mounted on a catheter, which is inserted into the descending aorta. The balloon inflates during diastole and deflates during systole, which increases myocardial oxygen supply and decreases myocardial oxygen demand.
`,
    inDepthConsiderations: `
### In-Depth Considerations

**Indications:**
- Cardiogenic shock
- Acute myocardial infarction with complications
- Unstable angina refractory to medical therapy
- Support during high-risk percutaneous coronary intervention (PCI)
- Bridge to heart transplantation or other mechanical circulatory support

**Contraindications:**
- Severe aortic regurgitation
- Aortic dissection
- Severe peripheral artery disease
- Aortic aneurysm

**Complications:**
- Limb ischemia
- Bleeding and vascular injury at the insertion site
- Balloon rupture
- Thromboembolism
- Infection
`,
  },
  // Add other missing content items here
];

async function addMissingContent() {
  console.log('Starting to add missing content to Firestore...');
  const contentCollection = adminDb.collection('content');

  for (const item of missingContent) {
    try {
      const docRef = contentCollection.doc(item.slug);
      const doc = await docRef.get();

      if (doc.exists) {
        console.log(`Content with slug '${item.slug}' already exists. Skipping.`);
      } else {
        await docRef.set(item);
        console.log(`Successfully added content with slug: '${item.slug}'`);
      }
    } catch (error) {
      console.error(`Error adding content with slug '${item.slug}':`, error);
    }
  }

  console.log('Finished adding missing content.');
}

addMissingContent().catch(error => {
  console.error("An unexpected error occurred:", error);
  process.exit(1);
});
