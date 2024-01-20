// length
function getLength(str) {
  console.log("Orignal string :", str);
  console.log("String length :", str.length);
}

getLength("Hello World!");

function sum(a, b) {
  return a + b;
}

const finalSum = sum(3, 4);
console.log("The sum is :", finalSum);

const name = "Khush Manglani";
console.log(name.length);

function findIdxOf(word, target) {
  console.log("The word is :", word);
  console.log("The idx of", target, "in a", word, "is :", word.indexOf(target));
  return word.indexOf(target);
}

function findLastIdxOf(word, target) {
  console.log("The word is :", word);
  console.log(
    "The last idx of",
    target,
    "in a",
    word,
    "is :",
    word.lastIndexOf(target)
  );
  return word.lastIndexOf(target);
}

// indexOf

const idx = findIdxOf("Hello World World", "World");
console.log("The index is :", idx);

// lastIndexOf

const lastIdx = findLastIdxOf("Hello World World", "World");
console.log("The last index is :", lastIdx);

// slice

function getSlice(str, s, e) {
  console.log("The string is :", str);
  console.log("The slice from", s, "to", e, "is :", str.slice(s, e));
}

getSlice("Hello world", 0, 7);

const res = "Khush Manglani".slice(4, 7);
console.log(res);

function cutIt(str, startIdx, endIdx) {
  let newStr = "";
  for (let i = 0; i < str.length; ++i) {
    if (i >= startIdx && i < endIdx) {
      newStr += str[i];
    }
  }
  return newStr;
}

const value = "Tony Stark";
let resStr = cutIt(value, 2, 8);
console.log(resStr);

// replace

let str = "Hello World Hello";
const replaceStr = str.replace("Hello", "Javascript");
console.log(replaceStr);

// split

const str1 = "Hello, my name is khush!";
const str1AfterSplit = str1.split("!");
console.log(str1AfterSplit);

// trim

let str2 = "                    Hello         harkirat sir!                  ";
const str2AfterTrim = str2.trim();
console.log(str2);
console.log(str2AfterTrim);

const str2AfterReplace = str2.replace(/\s/g, "");
console.log(str2AfterReplace);

// toUpperCase

let str3 = "Hello, Everyone!";
const str3InUpper = str3.toUpperCase();
console.log(str3InUpper);

// toLowerCase

const str3InLower = str3.toLowerCase();
console.log(str3InLower);

// parseInt

console.log(parseInt("42"));
console.log(parseInt("42pxcvafds"));
console.log(parseInt("fsanfkln42aksdnfkl"));
console.log(parseInt(42.6));

// parseFloat

console.log(parseFloat("42"));
console.log(parseFloat("42pxcvafds"));
console.log(parseFloat("fsanfkln42aksdnfkl"));
console.log(parseFloat(42.6));
