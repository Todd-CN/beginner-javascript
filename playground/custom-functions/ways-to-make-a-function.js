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
  };
  return baby;
}

const makeAnotherBaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// left off at 23:06
