function findSum(n) {
  let sum=0;
  for(let i=0 ; i<n ; ++i) {
    sum += i;
  }
  return sum;
}

// synchronous function
// console.log(findSum(1000));

// asynchronous function

function printSumTill1000() {
  console.log(findSum(1000));
}

setTimeout(printSumTill1000,1000);
console.log('Hello World');