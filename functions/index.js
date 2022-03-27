const functions = require('firebase-functions');
const app = require('express')();

// Create a const pointing at our js file
const {
  getAllTodos,
  postOneTodo,
  deleteTodo,
  editTodo
} = require('./APIs/todos')

// Map incoming GET requests on /todos to `getAllTodos`
app.get('/todos', getAllTodos);

// Map incoming POST requests on /todos to `postOneTodo`
app.post('/todos', postOneTodo);

// Map incoming DELETE requests on /todos to `deleteTodo`
app.delete('/todos/:todoId', deleteTodo);

// Map incoming PUT requests on /todos to `editTodo`
app.put('/todos/:todoId', editTodo);

// Export a function `api`. When triggered, pass to `app`
exports.api = functions.https.onRequest(app);