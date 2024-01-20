// inport the inbuilt library express
const express=require('express');
// create an express app - obj instance
const app=express();
// to use the file present on path 
const path=require('path');
// import the logger.js in middleware folder 
const logger=require('./middleware/logger');
// server uses the port 3000
const port=process.env.PORT || 3000;

// initialize (init) middleware
// app.use(logger);

// body parser middleware, helps to parse the body so that we can use the body with request (req.body) 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set public folder to Static
// use to serve a static files like image, css, js
app.use(express.static(path.join(__dirname, 'public')));

// use the file from the routes/api/ 
// so that we can access the member details
app.use('/api/members', require('./routes/api/members'));

app.listen(port, () => {
  console.log('Server is listening at port :', port);
});