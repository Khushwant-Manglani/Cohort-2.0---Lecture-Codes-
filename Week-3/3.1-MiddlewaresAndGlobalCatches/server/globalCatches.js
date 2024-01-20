const express=require('express');
const app=express();
const port=3000;

app.use(express.json());

app.post('/kidney-check', function(req, res, next) {
  // array of kidneys = [1, 2]
  const kidneys=req.body.kidneys;
  const kidneysLength=kidneys.length;
  res.send('You have ' + kidneysLength + ' kidneys.');
});

// global catches - middleware
// if any error occur like wrong type of inputs 
// program throw an exception and send the control at global catches
// then for error-handling we use global catches 
// express determite it by passing four parameter

app.use(function(err, req, res, next) {
  console.log(err); // check what err occurr
  res.status(500).send('Error occurred on a server.');
});

app.listen(port);