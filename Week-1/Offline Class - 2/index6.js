// Math

// gives random number between 0 to 1
console.log(Math.random());
console.log(Math.floor(2.3)); // 2
console.log(Math.ceil(2.3)); // 3;
console.log(Math.round(2.3)); // 2
console.log(Math.round(2.6)); // 3
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.4)); // 2

// Object method explaination

function objectMethods(obj) {
  // print an object
  console.log(obj);
  
  // use key method to get all the keys of object in an keys array
  const keys = Object.keys(obj);
  console.log(keys);

  // use values method to get all the values of object in an values array
  const values = Object.values(obj);
  console.log(values);

  // use entries method to get all the {key,values} of object in an entries array
  const entries = Object.entries(obj);
  console.log(entries);

  // use hasOwnProperty to check if the object has the key or not
  const hasProperty = obj.hasOwnProperty("gender");
  console.log(hasProperty);

  // create a newObj and assign it with 1 or more object or assign any property with object 
  const newObj = Object.assign({}, obj, { gender: "male" });
  console.log(newObj);
}

const user = {
  name: "Raj",
  age: 23,
  sayHello: function () {
    console.log("Hello");
  },
};

objectMethods(user);
