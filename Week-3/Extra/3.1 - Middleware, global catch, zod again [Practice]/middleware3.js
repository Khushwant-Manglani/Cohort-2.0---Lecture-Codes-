const express=require('express');
const app=express();

let noOfReq=0;

function noOfRequest(res, req, next) {
  noOfReq++;
  console.log(noOfReq);
  // does not stop req-res cycle
  next(); // go to the next middleware
}

// middleware in app.use() call for all the route (http req - get, put, post) 
app.use(noOfRequest);

app.get('/', function(req, res) {

});

app.post('/check', function(req, res) {

});

app.listen(3000);