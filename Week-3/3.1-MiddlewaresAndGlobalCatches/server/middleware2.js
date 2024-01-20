const express=require('express');
const app=express();
const port=3000;

let noOfReq=0;

function calcNoOfReq(req, res, next) {
  noOfReq++;
  console.log(noOfReq);
  next();
}

app.use(calcNoOfReq);

app.post('/', function(req, res) {

}); 

app.get('/check', function(req, res) {

}); 

app.listen(port);
