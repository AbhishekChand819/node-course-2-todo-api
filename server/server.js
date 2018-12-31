var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {Users} = require('./models/user');

var app = express();

app.use(bodyParser.json());
app.post('/todos', (req,res) => {
var todo =new Todo({
text: req.body.text
});

todo.save().then((doc) => {
res.send(doc);
},(err) => {
res.status(400).send(err);
});
});

app.listen(3000,() =>{
    console.log('Starting on porrt 3000');
});

module.exports = {app};
