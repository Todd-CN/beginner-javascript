//function definition
function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  // console.log(billAmount, taxRate);
  const total =
    billAmount + billAmount * taxRate * taxRate + billAmount * tipRate;
  return total;
}

// function call / running the function
const myTotal = calculateBill(100, 0.13);
// console.log(`Your total is ${myTotal}`);

// console.log(myTotal);

function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}

// const greeting = sayHiTo("Wes");
// console.log(greeting);

// const myTotal3 = calculateBill(20 + 20 + 30 + 20, 0.15); // this works - it will run the expression first

function doctorize(name) {
  return `Dr. ${name}`;
}

function yell(name = "Silly Goose") {
  return `HEY ${name.toUpperCase()}!`;
}

const myBill4 = calculateBill(100, 0.13, 0.15);
console.log(myBill4);
