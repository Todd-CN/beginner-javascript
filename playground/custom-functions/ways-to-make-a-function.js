// function doctorize(firstName){
//     return `Dr. ${firstName}`;
// }

//anonymous function
// * not valid JS in this case right here (requires function name)
// * however, they are valid as callbacks or in an IFFY (immediately invoked function expression)
// function (firstName){
//     return `Dr. ${firstName}`;
// }

//quick lesson on hoisting
// * if you try to run a function before you define it (const doctorize) it will throw an error
// doctorize("wes"); // ReferenceError: Cannot access 'doctorize' before initialization
// console.log(doctorize("wes"));

//function expression - store a function as a value in a variable
// * JS does not hoist variable functions / function expressions
// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// };

// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

//arrow functions
// * they don't have their own scope / 'this' keyword
// function inchToCM(inches) {
//   const cm = inches * 2.54;
//   return cm;
// }

// we can make this shorter
// function inchToCM(inches) {
//   return inches * 2.54;
// }

// convert to anonymous function
// const inchToCM = function (inches) {
//   return inches * 2.54;
// };

// convert to arrow function
// const inchToCM = (inches) => {
//   return inches * 2.54;
// };

// convert to implicit return
const inchToCM = (inches) => inches * 2.54;

// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }

const add = (a, b = 3) => a + b;

function makeABaby(first, last) {
  const baby = {
    name: `${first} ${last}`,
    age: 0,
  };
  return baby;
}

const makeAnotherBaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE - immediately invoked function expression
(function (age) {
  console.log("Running the Anonymous Function");
  return `You are cool and age ${age}`;
})(10);

// You wont use these often, but they are great for when you need to run a function immediately, create a closure, create a private scope, or create a module

// Methods!
// * methods are functions that are attached to an object, they live inside the object
// 3 different ways to write methods
const wes = {
  name: "Wes Bos",
  sayHi: function () {
    console.log(this); // this is going to be equal the object that it was called against ('wes' is the object in this case)
    console.log("Hey Wes!");
    return "Hey Wes";
  },
  // Short hand Method
  yellHi() {
    console.log("Hey Wesssss!");
    // this.sayHi()
  },
  // Arrow function
  whisperHi: () => {
    console.log("hi wes im a mouse");
  },
};

// Callback functions
// something that will happen when something else is done
// click callback
const button = document.querySelector(".clickMe");

button.addEventListener("click", wes.yellHi);
// notice we're not running it here () we're just saying hey browser, here's a function to call when somebody clicks that button

function handleClick() {
  console.log("Great Clicking!!");
}

button.addEventListener("click", function () {
  console.log("NIce Job!!!");
});

// Timer Callback
setTimeout(() => {
  console.log("DONE! Time to eat!");
}, 1000);
