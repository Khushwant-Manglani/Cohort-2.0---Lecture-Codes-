const express = require("express");
const app = express();

// function that returns boolean if the age of the person more the 14
function isOldEnough(age) {
  return age > 14;
}

function isOldEnoughMiddleware(req, res, next) {
  let age = req.query.age;
  if (age > 14) {
    next();
  } else {
    res.json({
      msg: "Sorry, you are not of the age yet.",
    });
  }
}

// app.use() is calling middleware for all http routes that are present below it.
app.use(isOldEnoughMiddleware);

app.get("/ride1", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride1.",
  });
});

app.get("/ride2", (req, res) => {
  res.json({
    msg: "You have successfully riden the ride2.",
  });
});

app.listen(3000, () => {});
