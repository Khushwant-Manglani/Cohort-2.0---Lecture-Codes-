const express=require('express');
const app=express();

// routes is an small app that access the route of routes.js  
const routes=require('./routes.js');
// means that url have the routes /api then the route given in routes to access the routes of routes.js
app.use('/api', routes);

app.listen(3000);