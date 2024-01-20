const express=require('express');
const app=express();
const port=3000;

app.use(express.json());

app.post('/kidney-check', function(req, res) {
  // kidneys array = [1, 2]
  const kidneys=req.body.kidneys;
  const kidneysLength=kidneys.length;

  res.send('You have ' + kidneysLength + ' kidneys.');
});

app.listen(port);