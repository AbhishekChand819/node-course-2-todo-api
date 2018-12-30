const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,  client) => {
if(err) {
   return console.log('Unavle to Connect to MongoDB server');
}
console.log('Connected to MongoDB Server');
const db = client.db('TodoApp')

// db.collection('Todos').findOneAndUpdate({
//     _id: new ObjectID('5c28b85b35d0341e4be4782f')
// }, {
//     $set: {
//         completed:true
//     }
// }, {
//     returnOriginal:false
// }).then((result) => {
// console.log('Updated element is:');
// console.log(result);
// });

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5c28ba7d35d0341e4be478cf')
}, {
    $inc: {
        age: 1
    }
},{
    returnOriginal: false
}).then((result) => {
    console.log(result);
})

// client.close();
});