const express = require("express");
const router = express();

router.get("/home", (req, res) => {
  res.send("<h1>Hello World from routes</h1>");
});

// exports the router so that other app can use it , 
// it helps when make an large application to structure the files
module.exports = router;
