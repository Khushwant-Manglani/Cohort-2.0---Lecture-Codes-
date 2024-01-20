const express = require("express");
const app = express();
const port = 3000;

app.get("/health-checkup", function (req, res) {
  // do health checks here
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username != "Khushwant" || password != "Qwerty876") {
    res.status(401).json({
      message: "User doesn't exist",
    });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(411).json({
      message: "wrong inputs check again!",
    });
    return;
  }

  res.json({ message: "You're kidney is healthy!" });
});

app.listen(port, () => {
  console.log("Listening on port https://localhost:3000");
});
