const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,  client) => {
if(err) {
   return console.log('Unavle to Connect to MongoDB server');
}
console.log('Connected to MongoDB Server');
const db = client.db('TodoApp')

// db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed:false
// }, (err, result) => {
// if(err) {
//     return consolelog('Unable to insert',err);
// }
// console.log(JSON.stringify(result.ops,undefined,2));
// });

// db.collection('Users').insertOne({
//     name:'Abhishek',
//     age:'19',
//     location:'New Delhi'
// }, (err,result) => {
//     if(err){
//         return console.log('Unable to create new user',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// });

client.close();
});