const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((current,next) => current + next,0);
};

const multiply = function(array) {
  return array.reduce((current,next) => current * next, 1);
};

const power = function(a, b) {
	let total = 1;
  for(let i = b; i > 0; i--){
    total *= a;
  };
  return total;
  //return Math.pow(a, b)
};

const factorial = function(a) {
  let total = 1;
	for(let i = a; i > 0; i--){
    total *= i;
  }
  return total;
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
