const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.<function name> -> what is between the <> is the function name
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info(`Received a request from ${request}`, {structuredData: true});
  response.send("Hello from Firebase!");
});