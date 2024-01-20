// use third party package deals with dates
const moment=require('moment');

// create own middleware
const logger = (req, res, next) => {
  // moment().format() - it gives us a curr date format
  // req contains all the information so we use it by that
  console.log(`${req.protocol}://${req.get('host')}${req.url}: ${moment().format()}`);
  next();
}

module.exports = logger;