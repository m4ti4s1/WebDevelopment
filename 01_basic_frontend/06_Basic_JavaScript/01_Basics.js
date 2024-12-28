console.log("Hello world");
hello("Matias", 18 )

function hello(name, age) {
  console.log("Hello" + name + " your age is : "+ age);
}
// JavaScript Cheat Sheet

// ---

// **Basics**

// Log to Console
console.log("Hello, World!");
/*

Data Types:
String: 'Hello', "World"
Number: 42, 3.14
Boolean: true, false
Null: null
Undefined: undefined
Object: { key: 'value' }
Array: [1, 2, 3]

Operators:
Arithmetic: +, -, *, /, %
Comparison: ==, !=, ===, !==, >, <, >=, <=
Logical: &&, ||, !

---
*/

// **Variables**

// Declaration
let x = 10;     // Block-scoped, mutable
const y = 20;   // Block-scoped, immutable
var z = 30;     // Function-scoped, avoid using

// Template Literals
const name = "Alice";
console.log(`Hello, ${name}!`);

// ---

// **Loops**

// For Loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// While Loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// For...of (Iterate Arrays)
const arr = ["a", "b", "c"];
for (const value of arr) {
  console.log(value);
}

// For...in (Iterate Objects)
const obj = { key1: "value1", key2: "value2" };
for (const key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

// ---

// **Functions**

// Function Declaration
/**
 * Adds two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of a and b.
 */
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers.");
  }
  return a + b;
}
console.log(add(2, 3));

// Arrow Functions
/**
 * Multiplies two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The product of a and b.
 */
const multiply = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers.");
  }
  return a * b;
};
console.log(multiply(2, 3));

// ---

// **DOM Manipulation**

// Select Elements
const heading = document.getElementById("heading");
const buttons = document.querySelectorAll("button");

// Modify Content
heading.textContent = "New Heading";
heading.innerHTML = "<strong>Bold Heading</strong>";

// Add Event Listeners
const button = document.querySelector("#btn");
button.addEventListener("click", () => {
  alert("Button clicked!");
});

// ---

// **Classes**

// Define a Class
/**
 * Represents a person.
 */
class Person {
  /**
   * @param {string} name - The name of the person.
   * @param {number} age - The age of the person.
   */
  constructor(name, age) {
    if (typeof name !== "string" || typeof age !== "number") {
      throw new TypeError("Invalid argument types.");
    }
    this.name = name;
    this.age = age;
  }

  /**
   * Greets with a message.
   */
  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

// Create an Instance
const alice = new Person("Alice", 30);
alice.greet();

// Inheritance
/**
 * Represents a student, which is a subclass of Person.
 */
class Student extends Person {
  /**
   * @param {string} name - The name of the student.
   * @param {number} age - The age of the student.
   * @param {string} grade - The grade of the student.
   */
  constructor(name, age, grade) {
    super(name, age);
    if (typeof grade !== "string") {
      throw new TypeError("Grade must be a string.");
    }
    this.grade = grade;
  }

  /**
   * Displays a study message.
   */
  study() {
    console.log(`${this.name} is studying.`);
  }
}

const bob = new Student("Bob", 20, "A");
bob.greet();
bob.study();

