function square(n) {
  return n * n;
}

function cube(n) {
  return n * n * n;
}

function sumOfSquares(a, b) {
  const sqA = square(a);
  const sqB = square(b);
  return sqA + sqB;
}

function sumOfCube(a, b) {
  const cbA = cube(a);
  const cbB = cube(b);
  return cbA + cbB;
}

const ans1 = sumOfSquares(1, 2);
console.log(ans1);

const ans2 = sumOfCube(1, 2);
console.log(ans2);

// callback - in javascript callback in a concept in which we can pass and function to an another function as an argument.

function sumOfSomething(a, b, callback) {
  console.log(a);
  console.log(b);
  console.log(callback);
  const val1 = callback(a);
  const val2 = callback(b);
  return val1 + val2;
}

const res = sumOfSomething(1, 2, square);
console.log(res);

// anonymous function - we directly pass a function as an argument to another funtion without function name.

const res2 = sumOfSomething(2, 2, function (n) {
  return n * n;
});
console.log(res2);
