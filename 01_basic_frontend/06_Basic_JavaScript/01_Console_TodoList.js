class Task {
  constructor (name, description) {
    this.name = name;
    this.description = description;
    this.statusFinished = false;
  }
  
  markCompleted() {
    this.statusFinished = true;
  }
  
  markIncomplete() {
    this.statusFinished = false;
  }

  display() {
    return `${this.name} - ${this.statusFinished ? "Completed" : "Pending"}`;
  }
}

class Controller {
  constructor () {
    this.tasks = [];
  }
  
  addTask(task) {
    this.tasks.push(task);
  }
  
  removeTask(index) {

    if (index >= 0 && index < this.tasks.length) {
      this.tasks.splice(index ,1);
      console.log("Task deteled successfully")
    } else {
      console.log("Index not valid");
    }
  }
  
  toggleComplete(task) {
    task.statusFinished ? task.markIncomplete() : task.markCompleted();
    console.log(`Task toggle as ${task.statusFinished ? "Completed" : "Pending"}`);

  }

  
  displayTasks() {
    let index = 0;
    this.tasks.forEach(task => {
      console.log(`${index}: ${task.display()}`);
      index++;
    });
  }
  
  findTask(name) {
    return this.tasks.find(task => task.name === name);
  }
}


const task1 = new Task("First Task", "Description for task 1");
const task2 = new Task("Second Task", "Description for task 2");


const ctrl = new Controller();
ctrl.addTask(task1);
ctrl.addTask(task2);

ctrl.toggleComplete(task1);
ctrl.toggleComplete(task1);
ctrl.displayTasks();



console.log("\n--- NOW DELETE 1 TASk ---")
ctrl.removeTask(0);
ctrl.removeTask(7);
ctrl.displayTasks();