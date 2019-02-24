// MongoDB module v2
// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// Destructuring example
// var user = {name: 'Louie', age: 8001};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   complete: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2))
  // });

  db.collection('Users').insertOne({
    // _id: 124,
    name: 'Jean Val Jean',
    age: 9001,
    location: 'Mars'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert Users', err);
    }
    // console.log(JSON.stringify(result.ops, undefined, 2))
    // console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});

// MongoDB module v3
// const MongoClient = require ('mongodb').MongoClient;
//
// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
//   if (err) {
//     return console.log('Unable to connect to MongoDB server');
//   }
//   console.log('Connected to MongoDB server');
//   const db = client.db('TodoApp');
//
//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     complete: false
//   }, (err, result) => {
//     if (err) {
//       return console.log('Unable to insert todo', err);
//     }
//     console.log(JSON.stingify(result.ops, undefined, 2))
//   });
//
//   client.close();
// });
