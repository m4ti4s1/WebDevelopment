// **Arrow Functions Tutorial**

// 1. Simple Arrow Function
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

// 2. Arrow Function with No Parameters
const greet = () => console.log('Hello, World!');
greet(); // Output: Hello, World!

// 3. Arrow Function in Array Methods
const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num ** 2);
console.log(squares); // Output: [1, 4, 9, 16]

// 4. Arrow Function as Callback
const isEven = num => num % 2 === 0;
console.log(numbers.filter(isEven)); // Output: [2, 4]

// **Destructuring Tutorial**

// 1. Destructuring Objects
const person = { name: 'Alice', age: 25, city: 'Wonderland' };
const { name, age } = person;
console.log(`${name} is ${age} years old.`); // Output: Alice is 25 years old.

// 2. Destructuring Arrays
const colors = ['red', 'green', 'blue'];
const [firstColor, , thirdColor] = colors;
console.log(`First: ${firstColor}, Third: ${thirdColor}`); // Output: First: red, Third: blue

// 3. Nested Destructuring
const user = {
  id: 1,
  profile: {
    username: 'coder123',
    details: { hobby: 'coding', level: 'intermediate' }
  }
};
const {
  profile: {
    details: { hobby }
  }
} = user;
console.log(hobby); // Output: coding

// **Template Literals Tutorial**

// 1. Basic Template Literals
const name1 = 'Alice';
const message = `Hello, ${name1}!`;
console.log(message); // Output: Hello, Alice!

// 2. Multi-line Strings
const poem = `Roses are red,
Violets are blue,
ES6 is great,
And so are you!`;
console.log(poem);

// 3. Expression Interpolation
const a = 5, b = 10;
const result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // Output: The sum of 5 and 10 is 15.


// 4. Tagged Templates

// Always literal templates start with a literal string, 
// when is not there is replace it with ""
function emphasize(literals, ...placeholders) {
  const initialValue = '';
  return literals.reduce((accumulator, currentValue, i) => {
    const upperCaseValue = placeholders[i] ? placeholders[i].toUpperCase() : '';
    return `${accumulator}${currentValue}${upperCaseValue}`
  }, initialValue); 
}
const str = emphasize`Hello, ${'Matias'}. Welcome to ${'JavaScript'}!`;
const str1 = emphasize`${'Matias'}. Welcome to ${'JavaScript'}!`;
console.log(str); // Output: Hello, ALICE. Welcome to JAVASCRIPT!
console.log(str1); // Output: Hello, ALICE. Welcome to JAVASCRIPT!
