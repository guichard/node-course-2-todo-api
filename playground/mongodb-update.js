// MongoDB module v2
// const MongoClient = require ('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate(
  //   {_id: new ObjectID('5c6f7755d23ba8d37f155d9f')},
  //   {$set: { complete: true }},
  //   {returnOriginal: false})
  //   .then((result) => {
  //   console.log(result);
  //   // console.log(JSON.stringify(result, undefined, 2));
  //   // db.close();
  // });

  db.collection('Users').findOneAndUpdate(
    {_id: 124},
    {$inc: { age: 1 }},
    {returnOriginal: false})
    .then((result) => {
      console.log(result);
    // console.log(JSON.stringify(result, undefined, 2));
    // db.close();
  });

});
