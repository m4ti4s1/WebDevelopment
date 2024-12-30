const colors = ['red', 'green', 'yellow'];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // output: red


const [, , lastColor] = colors;
console.log(lastColor);


const person = {
  name: 'Matias',
  age: 18,
  job: 'Web Development'
}



console.log(person.name);
console.log(person.age);
console.log(person.job);

console.log(person['name']);
console.log(person['age']);
console.log(person['job']);


// Create a new property
person.email = 'matias.22@gmail.com';
console.log(person.email);

let key = 'location';
person[key] = 'Quirihue';
console.log(person.location);


// Delete a property
delete person.email;
console.log(person['email']);



// Iterate through object propertes
console.log('\nProperties Iteration:')
for (key in person) {
  console.log(key + ': ' + person[key])
}


// Iterate through objects keys
console.log('\nKeys Iteration:');
Object.keys(person).forEach(key => {
  console.log(key);
});


// Iterate through objects vlaues
console.log('\nValues Iteration:');
Object.values(person).forEach(value => {
  console.log(value);
});



console.log('\n\n\n--- Nested Objects --- \n\n')


// Nested Objects 
const car = {
  brand: 'Mercedes',
  spects: {
    hp: 200,
    model: 'SLG 250',
    seatNumber: 5,
    engine: '4.2 litters'
  },
  // Methods
  setHP:  function(hp) {
    this.spects.hp = hp;
  },

  setModel (model) {
    this.spects.model = model;
  }
};

console.log(car.spects.hp);
console.log(car['spects']['hp']);


// Methods
console.log(car);
car.setModel('AMG 4500')
car.setHP(400);
console.log(car);



// Destructuring Objects

const {brand: carBrand, spects, spects : {hp, model, seatNumber, engine, custom = false}} = car;

console.log(carBrand); // access changing renaming properties
console.log(spects);
console.log(custom);


// Create an list of objects using the same structure
console.log('\n\n\n--- List of Objects with the same structure ---')

// task structure
let task1 = {
  id: 1,
  name: 'Code for 1 hour',
  time: '1.5 hours',
  completed: false,
  subTasks: {
    subtask1: {id: 1, name: 'Start new Project', time: '30 minutes', completed: false}
  }
};

const todoList = [];
todoList.push(task1);
todoList.push({id: 2, name: 'Finish Something', time: '2 hours', completed: false});

console.log(todoList);

for (i = 0; i < todoList.length; i++) {
  const task = todoList[i];
  printTask(task);
}


// Function to print tasks, and subtasks
function printTask(task, indentation = 0) {
  const {id, name, time, completed, subTasks = {}} = task;

  const indent = '  '.repeat(indentation);

  //main task
  console.log(`${indent}${id} - ${name} ${time} ${completed}`)

  for (const subTaskKey in subTasks) {
    const subTask = subTasks[subTaskKey];
    printTask(subTask, indentation + 1);
  }
}


// TODO, add indexed Automatically 







