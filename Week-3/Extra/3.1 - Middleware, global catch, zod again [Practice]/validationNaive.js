const express=require('express');
const app=express();

app.use(express.json());

// check validation middleware
function checkValidation(req, res, next) {
  const { username, password } = req.body;

  if(!username || typeof username !== 'string' || username.length < 3 ||
     !password || typeof password !== 'string' || password.length < 6) {
      res.status(400).json({ msg: 'Invalid inputs' });  
  }

  // everything is fine authentication done
  next();
}

// check kidneyCheck middleware
function kidneyCheck(req, res, next) {
  const { kidneyCnt } = req.body;

  if(kidneyCnt !== 1 && kidneyCnt !== 2) {
    res.status(400).json({ msg: 'Invalid inputs' });
  } 

  // everything fine kidney check done
  next();
}

app.get('/check-details', checkValidation, function(res, res) {
  res.json({ msg: 'Authentication is completed, now you\'re allow to go for kidney check' });
});

app.get('/check-kidney', checkValidation, kidneyCheck, function(req, res) {
  res.json({ msg: 'Authentication and kidney check is done!' });
})

const port=3000;
app.listen(port, () => {
  console.log(`Server is listening at - https://localhost:${port}`);
})