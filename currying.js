// Normal function
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5

// Curried version
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}
console.log(curriedAdd(2)(3)); // 5

// Using arrow functions
const multiply = a => b => a * b;
console.log(multiply(4)(5)); // 20