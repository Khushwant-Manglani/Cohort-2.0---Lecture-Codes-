// Array

// push

let initialArray = [1, 2, 3];
for (let i = 0; i < 5; ++i) {
  initialArray.push(i);
}
console.log(initialArray);

// pop

for (let i = 0; i < 3; ++i) {
  initialArray.pop();
}
console.log(initialArray);

// push front

for (let i = 7; i < 10; ++i) {
  initialArray.unshift(i);
}
console.log(initialArray);

// pop front

for (let i = 0; i < 4; ++i) {
  initialArray.shift();
}
console.log(initialArray);

// concat

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];

const finalArray = firstArray.concat(secondArray);
console.log(firstArray);
console.log(secondArray);
console.log(finalArray);

// forEach

const arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  console.log(element);
});

function logThing(element) {
  console.log(element, "is an element");
}

arr.forEach(logThing);

// callback

function log1() {
  console.log("Hello world1");
}

function log2() {
  console.log("Hello world2");
}

function callWhatsPresentInArg(fn) {
  fn();
}

callWhatsPresentInArg(log2);
