function myFuncPromise() {
  const p = new Promise((resolve, reject) => {
    resolve("Hi there!");
  });
  return p;
}

function main() {
  // promise is an asynchronous function 
  myFuncPromise().then((data) => {
    console.log(data);
  });
}

main();
