const express=require('express');
const app=express();

let noOfRequest=0;

function calcNoOfRequestMiddleware(req, res, next) {
  noOfRequest++;
  console.log(noOfRequest);
  next();
}

app.get('/home', calcNoOfRequestMiddleware, function(req, res, next) {
  
});

app.get('/about', calcNoOfRequestMiddleware, function(req, res, next) {
  
});

app.listen(3000);