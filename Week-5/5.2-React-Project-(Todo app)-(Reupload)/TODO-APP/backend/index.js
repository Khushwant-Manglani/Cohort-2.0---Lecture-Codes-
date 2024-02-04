const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types.js");
const { todo } = require("./db.js");
const cors = require("cors");
const PORT = 3000;

// middleware to access body in json format in request 
app.use(express.json());
app.use(cors());

// creating an todo
app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if(!parsePayload.success) {
    res.status(403).json({
      msg: "You have send the wrong inputs",
    });
  }

  // put it into mongodb
  await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  });

  res.json({
    msg: "Todo created successfully",
  });

});

// for getting an todo
app.get('/todos', async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});

// for marking an todo as completed
app.put('/completed', async (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if(!parsePayload) {
    res.status(403).json({
      msg: "You're id is incorrect plz check again",
    });
  }
  
  // update it 
  await todo.updateOne({
    _id: updatePayload.id,
  }, { "$set": {
    completed: true,
  }});

  res.json({
    msg: "You're todo has marked as completed",
  })

});

app.listen(PORT);
// write basic express boilerplate 
// with express.json() middleware