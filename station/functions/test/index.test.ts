// At the top of test/index.test.js
const test = require('firebase-functions-test')({
  databaseURL: 'https://septa-3f6ab.firebaseio.com',
  storageBucket: 'septa-3f6ab.appspot.com',
  projectId: 'septa-3f6ab',
}, './test/service-account.json');

const functions = require('firebase-functions');



const myFunctions = require('../src/index.js');


