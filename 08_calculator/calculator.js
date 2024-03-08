const add = function(a, b) {
  let result = a + b;

  return result
};

const subtract = function(a, b) {
	let result = a - b;

  return result
};

const sum = function(inputNumbers) {
	let result = 0;
  
  for (num of inputNumbers) {
    result += num;
  }

  let resultNumber = Number(result);

  return resultNumber
};

const multiply = function(inputNumbers) {
  let result = 1;
  
  for (num of inputNumbers) {
    result *= num;
  }

  let resultNumber = Number(result);

  return resultNumber
};

const power = function(base, power) {
	let result = base ** power;

  return result
};

const factorial = function(num) {
	let result = 1;

  for (let i = 1; i <= num; i++) {
    result *= i;
  }

  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
