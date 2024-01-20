// JSON

// JSON.stringyfy()
// JSON.parse()

// it is use to exchange data so that it can not loss, covert an JSON object to string and send data in the form of string and after recieved it convert in object , the object in in key value pairs but remember the key in the double quotes

function serializeJSONData(person) {
  // convert JSON object person into JSON string and return them
  return JSON.stringify(person);
}

function desierializeJSONData(jsonStr) {
  // covert the JSON String in JSON object and return them
  return JSON.parse(jsonStr);
}

let person = {
  name: "Raj",
  age: 23,
  gender: "male",
  hobbies: ["Cricket", "Singing"],
};

// serialize
const jsonStr = serializeJSONData(person);
console.log(jsonStr);

// deserialize
const jsonObj = desierializeJSONData(jsonStr);
console.log(jsonObj);
