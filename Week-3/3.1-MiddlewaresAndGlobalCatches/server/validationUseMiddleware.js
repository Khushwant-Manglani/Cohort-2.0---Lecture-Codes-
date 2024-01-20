const express=require('express');
const app=express();
const port=3000;

function userCheckMiddleware(req, res, next) {
  const username=req.headers.username;
  const password=req.headers.password;

  if(username!="Khushwant" || password!="Qwerty876") {
    res.status(403).json({
      message: "user doesn't exist"
    });
  } else {
    next();
  }
}

function kidneyCheckMiddleware(req, res, next) {
  const kidneyId=req.query.kidneyId;

  if(kidneyId!=1 && kidneyId!=2) {
    res.status(411).json({
      message: "invalid inputs please check again"
    });
  } else {
    next();
  }
}

app.get('/checkup', userCheckMiddleware, function(req, res) {
  res.json({ message: "Valid credentials." });
});

app.get('/health-checkup', userCheckMiddleware, kidneyCheckMiddleware, function(req, res) {
  res.json({ message: "You're health is perfect." });
});

app.get('/kidney-checkup', userCheckMiddleware, kidneyCheckMiddleware, function(req, res) {
  res.json({ message: "You're kidney is perfect." });
});

app.listen(port);