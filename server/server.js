// library imports
var express = require('express');
var bodyParser = require('body-parser');

// local imports
var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.listen(3000, () => {
  console.log('Started on port 3000 now');
});

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});

// var Todo = mongoose.model('Todo', {
//   text: { type: String, required: true, minlength: 1, trim: true },
//   completed: { type: Boolean, default: false },
//   completedAt: {type: Date, default: Date.now}
//   });

// var newTodo = new Todo({
//   text: 'Mogur barfed all over the place'
//   // completed: true
// });

// var User = mongoose.model('User', {
//   email: { type: String, required: true, minlength: 1, trim: true },
//   completedAt: {type: Date, default: Date.now}
//   });
//
//   var newUser = new User({
//     email: 'mogur@barf.com'
//     // completed: true
//   });

  // newUser.save().then((doc) => {
  //   console.log('Added todo', doc);
  // }, (e) => {
  //   console.log('Unable to add user');
  // });
