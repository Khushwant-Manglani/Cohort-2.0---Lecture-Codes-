const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://admin:AmjbsjniarknsWLq@cluster0.jirgonf.mongodb.net/userappnew");

const User = mongoose.model("Users", {
  email: String,
  password: String,
  name: String,
});

// CRUD - create, read, update, delete

app.post('/signin', async function(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  
  const user = new User({
    email: username,
    password: password,
    name: name,
  });

  // User.findOne({ email: username }).then(function(userExist) {
  //   if(userExist) {
  //     res.status(400).send("User already exists.")  
  //     return;  
  //   }

  //   user.save();
  //   res.status(200).json({
  //     msg: "User created successfully."
  //   })
  // }) 

  const userExist=await User.findOne({ email: username });
  
  if(userExist) {
    res.status(400).send("User already exists.");
    return;
  } 

  user.save();
  res.json({
    msg: "User created successfully."
  });

});

app.listen(3000);

