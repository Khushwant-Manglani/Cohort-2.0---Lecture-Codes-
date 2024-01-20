const express=require('express');
const app=express();

const port=process.env.PORT || 3000;

function calculateSum(n) {
  let sum=0;
  for(let i=1 ; i<=n ; ++i) {
    sum += i;
  }
  return sum;
}

app.get('/', (req, res) => {
  const n=req.query.n;
  res.send('The sum of 1 to ' + n + ' is : ' + calculateSum(n));
});

app.listen(port, () => { console.log('Listening to the port', port); });