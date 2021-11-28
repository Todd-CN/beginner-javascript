//function definition
function calculateBill() {
  //   console.log("running calculate bill");
  const total = 100 * 1.13;
  return total;
}

// function call / running the function
// const myTotal = calculateBill();
// console.log(`Your total is ${myTotal}`);

console.log(`Your total is $${calculateBill()}`);
