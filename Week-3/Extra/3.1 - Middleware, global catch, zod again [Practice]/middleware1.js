const express=require('express');
const app=express();

app.get('/', function(req, res, next) {
  console.log("from callback fn 1");
  next();
}, function(req, res, next) {
  console.log("from callback fn 2");
  next();
});

app.listen(3000);