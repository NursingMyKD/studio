const fs = require('fs');
const path = require('path');

// Path to your downloaded serviceAccountKey.json file
const serviceAccountKeyPath = path.resolve(__dirname, '..', 'serviceAccountKey.json');
const serviceAccountKeyObject = JSON.parse(fs.readFileSync(serviceAccountKeyPath, 'utf8'));
const serviceAccountKeyString = JSON.stringify(serviceAccountKeyObject);

const base64EncodedKey = Buffer.from(serviceAccountKeyString).toString('base64');

const outputFilePath = path.resolve(__dirname, '..', 'serviceAccount.base64.txt');

// Write the base64 string to a file for easy copy-paste
fs.writeFileSync(outputFilePath, base64EncodedKey);
console.log(`Base64 string written to ${outputFilePath}`);
