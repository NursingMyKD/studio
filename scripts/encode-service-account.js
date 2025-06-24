const fs = require('fs');

// Path to your downloaded serviceAccountKey.json.json file
const serviceAccount = require('../serviceAccountKey.json.json');

const base64 = Buffer.from(JSON.stringify(serviceAccount)).toString('base64');

// Write the base64 string to a file for easy copy-paste
fs.writeFileSync('serviceAccount.base64.txt', base64);
console.log('Base64 string written to serviceAccount.base64.txt');
