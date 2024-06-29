// Function to divide 2000 by 100
const divide = () => 2000 / 100;

// Arrow function to square a number
const square = (x) => x * x;

// Function declaration example
function foo() {
  return 'bar';
}

// Function expression example
const fooExpression = function() {
  return 'bar';
}

// Arrow function example
const add = (parameter1, parameter2) => parameter1 + parameter2;
add(2, 3); //=> 5

const twoAdder = x => x + 2;

// Multi-line arrow function example
const sum = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
}
sum(1, 2); //=> 3

// Arrow function in .map() method example
const nums = [1, 2, 3];
const squares = nums.map(x => x ** 2);
squares; //=> [1, 4, 9]
nums; //=> [1, 2, 3]
