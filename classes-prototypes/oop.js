/****************************************************************
                  WORKING WITH OBJECT LITERALS
****************************************************************/

/*** CHALLENGE 1 ***/
/*
Create a function that has two parameters (name and age) and returns an object. 
Let's call this function makePerson. This function will:
1. Create an empty object
2. Add a name property to the newly created object with its value being the 
'name' argument passed into the function
3. Add an age property to the newly created object with its value being the 
'age' argument passed into the function
4. Return the object
*/
function makePerson(name, age) {
  // add code here
  return { name, age };
}

const vicky = makePerson("Vicky", 24);

// /********* Uncomment these lines to test your work! *********/
// console.log(vicky.name); // -> Logs 'Vicky'
// console.log(vicky.age); // -> Logs 24

/****************************************************************
                       USING OBJECT.CREATE
****************************************************************/

/*** CHALLENGE 2 ***/
// Inside personStore object, create a property greet where the value is a function
// that logs "hello".
// const personStore = {
//   // add code here
//   greet: () => {
//     console.log("hello");
//   },
// };

// /********* Uncomment this line to test your work! *********/
// personStore.greet(); // -> Logs 'hello'

/*** CHALLENGE 3 ***/
// Create a function personFromPersonStore that takes as input a name and an age.
// When called, the function will create person objects using the Object.create
// method on the personStore object.
function personFromPersonStore(name, age) {
  // add code here
  const newPerson = Object.create(personStore);
  return newPerson;
}

const personStore = (name, age) => {
  // add code here
  greet: () => {
    console.log("hello");
  };
  return { name, age, greet };
};
const sandra = personFromPersonStore("Sandra", 26);

// /********* Uncomment these lines to test your work! *********/
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); //-> Logs 26
sandra.greet(); //-> Logs 'hello'

/*** CHALLENGE 4 ***/
// Without editing the code you've already written, add an introduce method to the
// personStore object that logs "Hi, my name is [name]".
// add code here

// sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

/****************************************************************
                    USING THE 'NEW' KEYWORD
****************************************************************/

/*** CHALLENGE 5 ***/
// Create a function PersonConstructor that uses the this keyword to save a
// single property onto its scope called greet.
// greet should be a function that logs the string 'hello'.
function PersonConstructor() {
  // add code here
}

// /********* Uncomment this line to test your work! *********/
const simon = new PersonConstructor();
// simon.greet(); // -> Logs 'hello'

/*** CHALLENGE 6 ***/
// Create a function personFromConstructor that takes as input a name and an age.
// When called, the function will create person objects using the new keyword
// instead of the Object.create method.
function personFromConstructor(name, age) {
  // add code here
}

const mike = personFromConstructor("Mike", 30);

// /********* Uncomment these lines to test your work! *********/
// console.log(mike.name); // -> Logs 'Mike'
// console.log(mike.age); //-> Logs 30
// mike.greet(); //-> Logs 'hello'

/*** CHALLENGE 7 ***/
// Without editing the code you've already written, add an introduce method
// to the PersonConstructor function that logs "Hi, my name is [name]".
// add code here

// mike.introduce(); // -> Logs 'Hi, my name is Mike'

/****************************************************************
                        USING ES6 CLASSES
****************************************************************/

/*** CHALLENGE 8 ***/
// Create a class PersonClass. PersonClass should have a constructor that is
// passed an input of name and saves it to a property by the same name.
// PersonClass should also have a method called greet that logs the string 'hello'.
class PersonClass {
  constructor() {
    // add code here
  }

  // add code here
}

// /********* Uncomment this line to test your work! *********/
const george = new PersonClass();
// george.greet(); // -> Logs 'hello'

/*** CHALLENGE 9 ***/
// Create a class DeveloperClass that creates objects by extending the PersonClass class.
// In addition to having a name property and greet method, DeveloperClass should have an
// introduce method. When called, introduce should log the string 'Hello World, my name is [name]'.
// add code here

// /********* Uncomment these lines to test your work! *********/
// const thai = new DeveloperClass('Thai', 32);
// console.log(thai.name); // -> Logs 'Thai'
// thai.introduce(); //-> Logs 'Hello World, my name is Thai'

/****************************************************************
                      EXTENSION: SUBCLASSING
****************************************************************/

const userFunctionStore = {
  sayType: function () {
    console.log("I am a " + this.type);
  },
};

function userFactory(name, score) {
  let user = Object.create(userFunctionStore);
  user.type = "User";
  user.name = name;
  user.score = score;
  return user;
}

/*** CHALLENGE 10 ***/
// Create an object adminFunctionStore that has access to all methods in
// the userFunctionStore object, without copying them over individually.
const adminFunctionStore = {
  // add code here
};

/*** CHALLENGE 11, 12, 13 ***/
// Create an adminFactory function that creates an object with all the same
// data fields (and default values) as objects of the userFactory class,
// but without copying each data field individually.
function adminFactory(name, score) {
  // add code here
}

/*** CHALLENGE 12 ***/
// Then make sure the value of the 'type' field for adminFactory objects is 'Admin'
// instead of 'User'.

/*** CHALLENGE 13 ***/
// Make sure that adminFactory objects have access to adminFunctionStore methods,
// without copying them over.

/*** CHALLENGE 14 ***/
/* Put code here for a method called sharePublicMessage*/
// Created a method called sharePublicMessage that logs 'Welcome users!' and will
// be available to adminFactory objects, but not userFactory objects.
// Do not add this method directly in the adminFactory function.
const adminFromFactory = adminFactory("Eva", 5);

// /********* Uncomment these lines to test your work! *********/
// adminFromFactory.sayType() // -> Logs "I am a Admin"
// adminFromFactory.sharePublicMessage() // -> Logs "Welcome users!"

/****************************************************************
EXTENSION: MIXINS
****************************************************************/
// Mixins are a tool in object-oriented programming that allows objects to be
// given methods and properties beyond those provided by their inheritance.
// For this challenge, complete the missing code, giving all of the robotMixin
// properties to robotFido. Do this in a single line of code, without adding
// the properties individually.
class Dog {
  constructor() {
    this.legs = 4;
  }
  speak() {
    console.log("Woof!");
  }
}

const robotMixin = {
  skin: "metal",
  speak: function () {
    console.log(`I have ${this.legs} legs and am made of ${this.skin}`);
  },
};

let robotFido = new Dog();

// robotFido = /* Put code here to give Fido robot skills */;

// /********* Uncomment to test your work! *********/
// robotFido.speak() // -> Logs "I am made of metal"
