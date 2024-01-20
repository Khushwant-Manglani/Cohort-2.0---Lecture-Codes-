const express=require('express'); // lets you to create http server , manages all http routes
const app=express(); // create an instance of app

// body-parser middleware
app.use(express.json());

const users = [{
    name: "John",
    kidneys: [{
      healthy: false
    }]
  }
];

app.get('/', function(req, res) {
  const johnKidneys=users[0].kidneys;
  const noOfKidneys=johnKidneys.length;
  let noOfHealthyKidneys=0;
  
  users[0].kidneys.forEach(kidney => noOfHealthyKidneys += (kidney.healthy) );

  const noOfUnhealthyKidneys=noOfKidneys-noOfHealthyKidneys;

  res.json({
    noOfKidneys,
    noOfHealthyKidneys,
    noOfUnhealthyKidneys 
  })
});

app.post('/', function(req, res) {
  const isHealthy=req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy
  });
  res.json({
    msg: "Done!"
  });
});

app.put('/', function(req, res) {
  if(atleastOneKidneyIsUnhealthy(users[0].kidneys)) {
    for(let i=0 ; i<users[0].kidneys.length ; ++i) {
      if(!users[0].kidneys[i].healthy)
        users[0].kidneys[i].healthy=true;
    }
    res.json({ msg: "Done!" });  
  } else {
    res.status(411).json({ msg: "Some thing up with your inputs, you have no bad kidneys!" });
  }
});

app.delete('/', function(req, res) {
  if(atleastOneKidneyIsUnhealthy(users[0].kidneys)) {
    const userNewkidneys=users[0].kidneys.filter(kidney => kidney.healthy);
    users[0].kidneys=userNewkidneys;
    res.json({ msg: "Done!" });  
  } else {
    res.status(411).json({ msg: "Some thing up with your inputs, you have no bad kidneys!" });
  }
});

function atleastOneKidneyIsUnhealthy(kidneys) {
  // forEach can not terminate by return statement
  let isUnHealthy=false;
  kidneys.forEach((kidney) => {
    if(!kidney.healthy) {
      isUnHealthy=true;
    }
  })
  return isUnHealthy;
}

app.listen(3000);