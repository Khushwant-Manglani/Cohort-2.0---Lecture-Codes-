const express = require("express");
const app = express();

// sets the ingine to ejs to make web page dynamic intractive
app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  // title and message value get place in ejs file to make web page dynamic 
  // express response render the index file present with .ejs extension and replace the value given to that file
  res.render("index", {title: "my Express app", message: "hello world!"})
});

app.listen(5000);
