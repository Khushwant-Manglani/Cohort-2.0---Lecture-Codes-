const mongoose = require("mongoose");

// in realworld app we use this uri in .env
mongoose.connect("mongodb+srv://admin:AmjbsjniarknsWLq@cluster0.jirgonf.mongodb.net/todos");

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
  todo
};
