// Basic class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a noise.`;
  }
}
const dog = new Animal("Dog");
console.log(dog.speak()); // Dog makes a noise.

// Class inheritance
class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}
const pet = new Dog("Buddy");
console.log(pet.speak()); // Buddy barks.

// Static method
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}
console.log(MathUtil.add(2, 3)); // 5