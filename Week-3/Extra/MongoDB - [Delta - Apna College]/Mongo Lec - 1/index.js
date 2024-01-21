const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/test'); // asynchronous function

// or

main()
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => {
    console.log(err);
  })

async function main() {
  // mongoose.connect() is an asynchronous function we'll wait till the document connect and give access
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  age: Number
});

const User = mongoose.model('User', userSchema);

// when we have to insert one user

const user2 = new User({
  name: "Vijay",
  email: "vijay@yahoo.in",
  age: 18
});

// user2.save()
//   .then((user) => {
//     // console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// when we have to insert more than one user

// User.insertMany([
//   {name: "Raj", email: "raj@gmail.com", age: 18},
//   {name: "Taco", email: "taco@gmail.com", age: 28},
//   {name: "Brucely", email: "brucely@gmail.com", age: 19},
// ])
//   .then((data) => {
//     // console.log(data);
//   });

// perform find Operations

// User.find({})
//   .then((data) => {
//     console.log(data);
//   })

// User.find({age: {$gt: 25}})
//   .then((data) => {
//     console.log(data);
//   })

// User.find({})
//   .then((data) => {
//     console.log(data[0].name);
//   })

// User.find({ _id: "65ad36350b42985e4dcb5369" })
//   .then((data) => {
//     console.log(data);
//   })

// if we have to find only one element that sattisfy the property
User.findOne({age: {$gt: 15}})
  .then((data) => {
    console.log(data);
  })
