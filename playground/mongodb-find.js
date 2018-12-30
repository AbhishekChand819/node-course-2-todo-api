const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,  client) => {
if(err) {
   return console.log('Unavle to Connect to MongoDB server');
}
console.log('Connected to MongoDB Server');
const db = client.db('TodoApp')

db.collection('Todos').find().toArray().then((docs) => {
console.log('Todos');
console.log(JSON.stringify(docs,undefined,2));
},(err) => {
console.log('Unable to fetch Todos',err);
});

db.collection('Todos').find().count().then((count) => {
console.log(`Todos Count: ${count}`);
console.log(JSON.stringify(docs,undefined,2));
},(err) => {
console.log('Unable to fetch Todos',err);
});

// client.close();
});