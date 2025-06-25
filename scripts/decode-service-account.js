require('dotenv').config({ path: require('path').resolve(__dirname, '../.env.local') });

const fs = require('fs');
const path = require('path');

const base64 = process.env.FIREBASE_SERVICE_ACCOUNT_BASE64;
if (!base64) {
  console.error('FIREBASE_SERVICE_ACCOUNT_BASE64 is not set in .env.local');
  process.exit(1);
}

const json = Buffer.from(base64, 'base64').toString('utf8');
const outPath = path.resolve(__dirname, '../serviceAccountKey.json');
fs.writeFileSync(outPath, json);
console.log('Decoded service account key to', outPath);
