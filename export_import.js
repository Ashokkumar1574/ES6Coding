//Named export/import:
export function add(a, b) {
  return a + b;
}
export const PI = 3.14;

import { add, PI } from './math.js';
console.log(add(2, 3)); // 5
console.log(PI); // 3.14

//Default export/import:

export default function(name) {
  return `Hello, ${name}!`;
}

import greet from './greet.js';
console.log(greet("Alex")); // Hello, Alex!