// objects

const dog = {
  type: "Doggie",
  legCnt: 4,
  color: "black",
  speaks: "boww boww",
};

const cat = {
  type: "Cat",
  legCnt: 4,
  color: "black",
  speaks: "meoww meoww",
};

const bird = {
  type: "Bird",
  legCnt: 2,
  color: "grey",
  speaks: "chirp chirp",
};

// animal is of ___ color, and it has ___ legs. Speaks ___.

/*
console.log(
  dog["type"],
  "is of",
  dog["color"],
  "color, and it has",
  dog["legCnt"],
  "legs. Speaks",
  dog["speaks"]
);
console.log(
  cat["type"],
  "is of",
  cat["color"],
  "color, and it has",
  cat["legCnt"],
  "legs. Speaks",
  cat["speaks"]
);
console.log(
  bird["type"],
  "is of",
  bird["color"],
  "color, and it has",
  bird["legCnt"],
  "legs. Speaks",
  bird["speaks"]
);
*/

// or

function print(animal) {
  console.log(
    animal["type"],
    "is of",
    animal["color"],
    "color, and it has",
    animal["legCnt"],
    "legs. Speaks",
    animal["speaks"]
  );
}

print(dog);
print(cat);
print(bird);

// Note - we have to write again and again for objects but it has similar proprties so we can create a class blue print that generates any number of objects that have similarities

// Classes

class Animal {
  constructor(type, legCnt, color, speaks) {
    this.type = type;
    this.legCnt = legCnt;
    this.color = color;
    this.speaks = speaks;
  }

  static print(animal) {
    console.log(
      animal["type"],
      "is of",
      animal["color"],
      "color, and it has",
      animal["legCnt"],
      "legs. Speaks",
      animal["speaks"]
    );
  }

  myType() {
    console.log(`Hi there, i am a ${this.type}`);
  }

  myLegCnt() {
    console.log(`Hi everybody, i have ${this.legCnt} legs`);
  }

  myColor() {
    console.log(`Hi, my body color is ${this.color}`);
  }

  mySpeak() {
    console.log(`Hi, there i speaks ${this.speaks}`);
  }
}

let animalDog = new Animal("Dog", 4, "black", "baoww baoww");
let animalCat = new Animal("Cat", 4, "black", "meoww meoww");
let animalBird = new Animal("Bird", 2, "grey", "chirp chirp");

animalDog.myType();
animalDog.myLegCnt();
animalDog.myColor();
animalDog.mySpeak();

// we can access static variable with class name no need to create object but if not static then we can not access function with class name directly we have to create an object to call the function

Animal.print(animalDog); // call to static function
