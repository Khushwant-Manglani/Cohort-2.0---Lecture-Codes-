// create an http server
// express
// node inbuilt library -> no

const express=require('express'); // include an external library
const app=express(); // create an express application

function calculateSum(n) {
  let sum=0;
  for(let i=1 ; i<=n ; ++i) {
    sum += i;
  }
  return sum;
}

// req, res - request and response
app.get('/', (req, res) => {
  let n=req.query.n;
  const sum=calculateSum(n);
  res.send("The sum of 1 to " + n + " is " + sum);
});

app.listen(3000);