const express=require('express');
const app=express();
const port=3000;

let noOfReq=0;

function calcNoOfReq(req, res, next) {
  noOfReq++;
  console.log(noOfReq);
  next();
}

app.use(express.json());

app.post('/', function(req, res) {
  console.log(req.body);
  res.json(req.body);
}); 

app.get('/', function(req, res) {

}); 

app.listen(port);
