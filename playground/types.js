// /* eslint-disable */
// const name = "wes";
// const middle = "topher";
// const last = `bos`;

// // example of how backticks are beneficial- they don't break your sentence
// const sentence = `she's so cool`;

// // other way of escaping a character
// const sentence2 = `she\'s so cool`;

// //putting strings on multiple lines - this sucks- just use backticks
// const song = "Ohhh\
// \
// ya\
// \
// \
// pizza";

// // interpolation and concatenation

// const hello = "hello my name is " + name + ". Nice to meet you";

// const hello2 = `Hello my name is ${name}. Nice to meet you. I am ${
//   1 + 100
// } years old`;

// const html = `
//   <div>
//     <h2>${name}</h2>
//     <p>${hello}</p>
//   </div>
// `;

// document.body.innerHTML = html;

// const age = 100.5;
// const name = "wes";

// const smarties = 20;
// const kids = 3;
// const eachKidGets = Math.floor(smarties / kids);
// console.log(`Each kid gets ${eachKidGets}`);

// // Modulo operator - used for thing like looping over a list of numbers- for every third number you want to do something
// // for every third number, modulo 3, do this- not used very often
// const smartiesLeft = smarties % kids;

// Objects
const person = {
  first: "wes",
  last: "bos",
  age: 100,
};

// null and undefined

let dog;
// console.log(dog);
dog = "snickers";

let somethingUndefined;
const somethingNull = null;

const cher = {
  first: "cher",
};

const teller = {
  first: "Raymond",
  last: "Teller",
};

teller.first = "Teller";
teller.last = null;

// booleans
// used for logic such as if statements
// can be manually set or calculated

let isDrawing = false;
let age = 18;
const ofAge = age > 19;
console.log(ofAge); // age is less than 19, so console log will return 'false'

// Equality
// = : just for setting a value
age = 100; // age will now be set to 100

// == : will check for value
// will check that the value on the right and left are the same, but NOT the type
// almost always a bad practice to use these, but there are some edge cases
// 10 == 10 true
// 10 == '10' true

// === : will always check for value and type
// You should almost always use triple equal
// triple will check that the values on both the right and left are the same, AND that the types are the same
// 10 === 10 true
// 10 === '10' false

// Functions
// The allow us to group together sets of statements that are related to each other
// can take in data, aka 'arguments'
// sometimes they return a value

// Example
Math.max(10, 12); // this is a statment, will return to us the highest number (12)

// the data we pass to a function/give to a function in order for it to run is called an argument

// not all functions are meant to return something to you
console.log("hey");
// returns undefined
// sometimes functions just go off and do some work and then it's over, they don't bring back anything and will return undefined

// parseFloat - pass it a string and it will return a number - all about types
// parseInt - pass it a string and it will return a whole number
// Date.now() - the number of milliseconds since 1970 or something
