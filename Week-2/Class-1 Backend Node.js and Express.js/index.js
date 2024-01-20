const express = require('express'); // include an external library
const app = express(); // make an express app
const port = 3000; // port no.

const bodyParser = require('body-parser');

// body-parser middleware use to parse url-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

function calculateSum1toN(n) {
  let sum=0;
  for(let i=1 ; i<=n ; ++i) sum += i;
  return sum;
}

// sum of two number
function calcSum(a, b) {
  return parseFloat(a) + parseFloat(b);
}

// post request process after take the data and from user in req, req have the information of the user and res.send the data to the browser (cleint side) from server
app.post('/process-form', (req, res) => {
  const aVal=req.body.a;
  const bVal=req.body.b;
  res.send(`The sum of ${aVal} and ${bVal} is : ${calcSum(aVal, bVal)}`);
});

// get is a http method used by the user to send a req for getting the page, req have the information of the user and res sendFile send the html file data from curr directory to the browser (cleint side) from server 
app.get('/html', (req, res) => {
  // sending the file to the client
  res.sendFile(__dirname + '/index.html');
});

app.get('/handleSum', (req, res) => {
  const n = req.query.n;
  let totalSumStr = 'The sum is : ' + calculateSum1toN(n);
  res.send(totalSumStr);
});

// means app is listening on the port 3000.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});