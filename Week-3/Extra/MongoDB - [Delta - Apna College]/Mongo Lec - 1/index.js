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

const user2 = new User({
  name: "Vijay",
  email: "vijay@yahoo.in",
  age: 18
});

user2.save()
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  })
