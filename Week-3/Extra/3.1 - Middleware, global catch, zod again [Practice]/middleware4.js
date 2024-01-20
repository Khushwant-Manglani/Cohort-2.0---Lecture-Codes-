const express=require('express');
const app=express();

// express.json() middleware sends the json payloads to request
app.use(express.json());

app.post('/', function(req, res) {
  console.log(req.body);
  res.json(req.body); 
});

app.listen(3000);