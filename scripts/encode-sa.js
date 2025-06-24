require('dotenv').config({ path: '.env.local' });

const fs = require('fs');

const projectId = process.env.FIREBASE_PROJECT_ID;
const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

const serviceAccount = {
  type: 'service_account',
  project_id: projectId,
  private_key_id: '', // This can be left empty when using the key directly
  private_key: privateKey,
  client_email: clientEmail,
  client_id: '',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${clientEmail}`
};

const serviceAccountJson = JSON.stringify(serviceAccount);
const base64Encoded = Buffer.from(serviceAccountJson).toString('base64');

console.log(base64Encoded);
