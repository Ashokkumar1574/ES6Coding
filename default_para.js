// Function with default parameter
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
console.log(greet()); // Hello, Guest!

// Multiple default parameters
function multiply(a = 2, b = 3) {
  return a * b;
}
console.log(multiply()); // 6

// Arrow function with default parameter
const sayHi = (name = "Friend") => `Hi, ${name}!`;
console.log(sayHi()); // Hi, Friend!