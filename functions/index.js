const functions = require('firebase-functions');
const app = require('express')();

// Create a const pointing at our js file
const {
  getAllTodos
} = require('./APIs/todos')

// Map incoming GET requests on /todos to `getAllTodos`
app.get('/todos', getAllTodos);

// Export a function `api`. When triggered, pass to `app`
exports.api = functions.https.onRequest(app);