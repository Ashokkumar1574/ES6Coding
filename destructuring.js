// Array destructuring
const arr = [1, 2, 3];
const [first, second] = arr;
console.log(first, second); // 1 2

// Skipping elements
const [,, third] = arr;
console.log(third); // 3

// Object destructuring
const user = { id: 42, isAdmin: true };
const { id, isAdmin } = user;
console.log(id, isAdmin); // 42 true

// Renaming variables
const { id: userId } = user;
console.log(userId); // 42

// Nested destructuring
const person = { name: "Alex", address: { city: "NY" } };
const { address: { city } } = person;
console.log(city); // NY