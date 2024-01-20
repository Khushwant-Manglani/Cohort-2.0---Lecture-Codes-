// using an asyncronous function - fs.readFile()

const fs=require("fs");
// filesystem external library

fs.readFile("a.txt", "UTF-8", function(err, data) {
  console.log(data);
});

console.log('Hi there');

for(let i=0 ; i<100000000 ; ++i) {}

console.log('Hi there2');