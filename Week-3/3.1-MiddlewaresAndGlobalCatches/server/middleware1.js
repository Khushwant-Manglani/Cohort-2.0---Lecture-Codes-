const express=require('express');
const app=express();
const port=3000;

let noOfRequest=0;

function noOfRequestMiddleware(res, req, next) {
  noOfRequest++;
  console.log(noOfRequest);
  next();
}

app.get('/check1', noOfRequestMiddleware, function(req, res) {
  
});

app.get('/check2', noOfRequestMiddleware, function(req, res) {
  
});

app.listen(port);