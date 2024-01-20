const express=require('express'); // import the express library
const app=express(); // make an express application
const port=3000;

app.use(express.json());

let userArray = [{
  userId: 1,
  kidneys : [{
    isHealthy: true,
  }] 
}];

function getUserHealthArray() {
  const user = [];
  let healthyKidneys=0, unHealthyKidneys=0;
  for(let i=0 ; i<userArray.length ; ++i) {
    for(let j=0 ; j<userArray[i].kidneys.length ; ++j) {
      if(userArray[i].kidneys[j].isHealthy) healthyKidneys++;
      else unHealthyKidneys++;
    }

    user.push({ 
      noOfKidneys: userArray[i].kidneys.length,
      noOfHealthyKidneys: healthyKidneys,
      noOfUnHealthyKidney: unHealthyKidneys
    });
  }
  return user;
}

app.get('/', (req, res) => {
  const user=getUserHealthArray();
  res.json(user);
});

app.post('/', (req, res) => {
  const kidneyHealth=req.body.isHealthy;
  for(let i=0 ; i<userArray.length ; ++i) {
    userArray[i].kidneys.push({ isHealthy: kidneyHealth });
  }
  const user=getUserHealthArray();
  res.json(user);
});

app.put('/', (req, res) => {
  // Add the healthy kidney
  for(let i=0 ; i<userArray.length ; ++i) {
    userArray[i].kidneys.push({ isHealthy: true });
  }
  const user=getUserHealthArray();
  res.json(user);
});

app.delete('/', (req, res) => {
  // remove all unhealthy kidneys
  for(let i=0 ; i<userArray.length ; ++i) {
    let startIdx=0;
    for(let j=0 ; j<userArray[i].kidneys.length ; ++j) {
      if(userArray[i].kidneys[j].isHealthy) {
        // swap with starting object
        let tmp = userArray[i].kidneys[startIdx];
        userArray[i].kidneys[startIdx]=userArray[i].kidneys[j]
        userArray[i].kidneys[j]=tmp;
        startIdx++;
      }
    }
    let delElementCnt=userArray[i].kidneys.length-startIdx;
    userArray[i].kidneys.splice(startIdx,delElementCnt);
  }
  const user=getUserHealthArray();
  res.json(user);
});


app.listen(port, () => {
  console.log('https://localhost:3000/');
})