const { db } = require('../util/admin');

// * GET todos
exports.getAllTodos = (request, response) => {
  db
  .collection('todos')
  // todo, use correct name and update database as well `createtAt >> createdAt`
  .orderBy('createdAt', 'desc')
  .get()
  .then((data) => {
    let todos = [];
    data.forEach((doc) => {
      todos.push({
        todoId: doc.id,
        title: doc.data().title,
        body: doc.data().body,
        createdAt: doc.data().createdAt,
      });
    });
    return response.json(todos);
  })
  .catch((err) => {
    console.error(err);
    return response.status(500).json({ error: err.code});
  });
};


// * POST todos
exports.postOneTodo = (request, response) => {

  // Validate incoming request
  if (request.body.body.trim() === '') {
    return response.status(400).json({ body: 'Must not be empty' });
  }

  if(request.body.title.trim() === '') {
    return response.status(400).json({ title: 'Must not be empty' });
  }

  // Create newTodo object
  const newTodoItem = {
    title: request.body.title,
    body: request.body.body,
    createdAt: new Date().toISOString()
  }

  // Connect to db and:
  // - Push to db
  // - Construct response object
  // - Catch error if any
  db
  .collection('todos')
  .add(newTodoItem)
  .then((doc)=>{
    const responseTodoItem = newTodoItem;
    responseTodoItem.id = doc.id;
    return response.json(responseTodoItem);
  })
  .catch((err) => {
    response.status(500).json({ error: 'Something went wrong' });
    console.error(err);
  });
};


// * Delete a ToDo
exports.deleteTodo = (request, response) => {
  const document = db.doc(`/todos/${request.params.todoId}`);
  document.get()
  .then((doc) => {
    if (!doc.exists) {
      return response.status(404).json({ error: 'Todo not found' })
    }
    return document.delete();
  })
  .then(() => {
    response.json({ message: 'Deleted todo successfully' });
  })
  .catch((err) => {
    console.error(err);
    return response.status(500).json({ error: err.code });
  });
};

// * Edit a ToDo

exports.editTodo = ( request, response ) => {
  if(request.body.todoId || request.body.createdAt){
    response.status(403).json({message: 'Not allowed to edit'});
  }
  let document = db.collection('todos').doc(`${request.params.todoId}`);
  document.update(request.body)
  .then(()=> {
    response.json({message: 'Updated successfully'});
  })
  .catch((err) => {
    console.error(err);
    return response.status(500).json({
      error: err.code
    });
  });
};
