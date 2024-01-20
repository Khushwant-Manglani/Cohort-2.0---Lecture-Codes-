const express=require('express');
const path=require('path');
const app=express();
const port=3000;

// to send all the files as a static from public directory
app.use(express.static(path.join(__dirname, 'public')));

// body-parser middleware
app.use(express.urlencoded({ extended: true }));

function calcSumOfAandB(a, b) {
  return parseFloat(a) + parseFloat(b);
}

app.post('/sum', (req, res) => {
  console.log(req.body);
  const aVal=req.body.aVal;
  const bVal=req.body.bVal;

  const sumab=calcSumOfAandB(aVal,bVal);
  res.send('Sum of ' + aVal + ' and ' + bVal + ' is : ' + sumab);
});

app.listen(port);