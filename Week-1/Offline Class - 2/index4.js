function currTimePrint() {
  let date = new Date();
  console.log(date.getSeconds());
}

// it execute the currTimePrint function in every 1000 Milliseconds (1s)
let intervalId = setInterval(currTimePrint, 1000);

// to stop the setInterval use setTimeOut
// Stop the interval after 5 seconds
setTimeout(function () {
  clearInterval(intervalId);
}, 5000);

