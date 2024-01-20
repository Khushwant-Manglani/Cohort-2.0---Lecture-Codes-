console.log('hello world');

// Primitive data types (number, string, boolean, null, undefined)

const a = 1;
console.log(a);

// Ques 1 

function greet(firstName, lastName) {
  console.log(`Hello ${firstName} ${lastName}!`);
}

greet('Khush','Manglani');

let firstName="Khushwant";
let age = 21;
let isMarried=false;

console.log("This person name is " + firstName + " and age is " + age);

if(!isMarried)
  console.log(firstName + " is not married");
else 
  console.log(firstName + " is married");

// Ques 3

let res=0;

for(let no=0 ; no<=100 ; ++no) {
  res += no;
}

console.log(`Sum from 0 to 100 is: ${res}`);


//=============================================

// Non primitive data types (array, strings, )


// Ques 1 

const ages = [21, 22, 23, 24, 25];
const noOfPeople=ages.length;

for(let i=0 ; i<noOfPeople ; ++i) {
  if(ages[i] % 2 == 0) {
    console.log(ages[i] + ", ");
  }
}

// Ques 3 

const personArray = ["Khush", "Raman", "priya"];
const genderArray = ["male", "male", "female"];
const noOfUsers = personArray.length;

const users1 = {
  firstName: "Khush",
  gender: "male"
};

console.log(users1["Khush"]);

// users array of object

const allUsers = [
  {
    firstName: "Khush",
    gender: "male" 
  },
  {
    firstName: "Raman",
    gender: "male"
  },
  {
    firstName: "priya",
    gender: "female"
  }
];

// pending male print firstName

for(let i=0 ; i<allUsers.length ; ++i) {
  if(allUsers[i]["gender"]=="male") {
    console.log(allUsers[i]["firstName"]);
  }
}

function calcSumOfAB(a, b) {
  // do things with the input and return an output
  const sumVal = a + b;
  return sumVal;
}

const value = calcSumOfAB(1,2);
console.log(value);


// let ans=0;
// for(let i=0 ; i<100000000000 ; ++i) ans+=i;
// console.log(ans);


//=============================================

function sum(num1, num2, fnToCall) {
  let result = num1 + num2;
  fnToCall(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum

const ans = sum(1, 2, displayResult);
// callbacks