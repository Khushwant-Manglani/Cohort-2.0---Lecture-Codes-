const express=require('express');
const app=express();

// app.use() call the middleware present in it for the middleware or callback fn below it 
app.use(express.json())

app.post('/kidney-check', function(req, res) {
  const kidney=req.body.kidney;
  const kidneyLength=kidney.length;
  res.send('The no. of kidneys is : ' + kidneyLength);
});


// global catch or Error handling middleware
// if any error occur in execution means we pass an post req and input is invalid data type
// then the program execution give it to global catch to handle error
app.use(function(err, req, res, next) {
  // print what error occurr to check
  console.log(err);
  res.status(500).send('Error occurr');
});

app.listen(3000);