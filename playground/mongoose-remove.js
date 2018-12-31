const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findOneAndRemove({_id: '5c28b85b35d0341e4be4782f'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5c28b85b35d0341e4be4782f').then((todo) => {
  console.log(todo);
});
