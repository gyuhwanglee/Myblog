import mongoose from 'mongoose'
require('dotenv').config()

const URI = process.env.MONGODB_URL 

 mongoose.connect(`${URI}`, {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if(err) throw err;
  console.log('Mongodb connection')
})

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://leegyuhwang:<password>@cluster0.madcf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });