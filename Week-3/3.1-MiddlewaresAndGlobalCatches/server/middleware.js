const express=require('express');
const app=express();
const port=3000;

app.get('/', function(req, res, next) {
  console.log('req from the callback fn 1');
  next();
}, function(req, res, next) {
  console.log('req from the callback fn 2');
  next();
});

app.listen(port);