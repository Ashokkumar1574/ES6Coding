// Using let
let count = 1;
if (true) {
  let count = 2; // Different variable (block-scoped)
  console.log(count); // 2
}
console.log(count); // 1

// Using const
const PI = 3.14;
// PI = 3.1415; // Error: Assignment to constant variable

// const with objects (object properties can change)
const person = { name: "Alex" };
person.name = "Sam"; // Allowed