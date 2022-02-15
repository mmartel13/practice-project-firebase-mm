//first bring in firebase library
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');

//to connect to firestore 
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

//bringing in credentials.json file
const credentials = require('../credentials');

function connectDb () {
  //connecting to the firebase service
  initializeApp({
      credential: cert(credentials)
    });
    //connecting to firestore and returning the connection. If you don't return it, it wont connect within other files. 
    return getFirestore();
  
}

module.exports = { connectDb }