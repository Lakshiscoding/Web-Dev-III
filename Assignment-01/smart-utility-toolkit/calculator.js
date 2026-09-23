const args = process.argv;
const operation = args[2];
const num1 = Number(args[3]);
const num2 = Number(args[4]);

if (!operation || isNaN(num1) || isNaN(num2)) {
  console.log('Usage: node calculator.js <operation> <num1> <num2>');
  process.exit(1);
}

let result;

if (operation === 'add') {
  result = num1 + num2;
} else if (operation === 'sub' || operation === 'subtract') {
  result = num1 - num2;
} else if (operation === 'mul' || operation === 'multiply') {
  result = num1 * num2;
} else if (operation === 'div' || operation === 'divide') {
  if (num2 === 0) {
    console.log('Error: Division by zero');
    process.exit(1);
  }
  result = num1 / num2;
} else {
  console.log('Invalid operation');
  process.exit(1);
}

console.log('Result: ' + result);
