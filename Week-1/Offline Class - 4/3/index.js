// With out promises
/*-
const fs = require("fs");
// filesystem external library

// our own asynchronous function
function funcReadFile(callback) {
  fs.readFile("a.txt", "UTF-8", function (err, data) {
    callback(data);
  });
}

function printData(data) {
  console.log(data);
}

funcReadFile(printData);
*/

// promises

const fs = require("fs");
// filesystem external library

function funcReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "UTF-8", function (err, data) {
      resolve(data);
    });
  });
}

function printData(data) {
  console.log(data);
}

// funcReadFile()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// or

funcReadFile().then(printData);

// 3 states of promise - pending, resolve, reject

const p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve("Success");
    } else {
      reject("Error");
    }
  }, 5000);
});

function printPromise() {
  console.log(p);
}

console.log(p);
p.then(printPromise);

/*

// promise also an asynchronous function 
// Hi there! will print before success in promise
const p1 = new Promise((resolve, reject) => {
  resolve("success");
});

p1.then((data) => console.log(data));
console.log("Hi there!");

*/
