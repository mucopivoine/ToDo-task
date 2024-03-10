
class Task {
    constructor(details, type) {
      this.details = details;
      this.type = type;
      this.completed = true;
    }
  }
  class ToDoList {
    constructor() {
      this.tasks = [];
    }
    addTask(details, type) {
      const task = new Task(details, type);
      this.tasks.push(task);
    } 
    displayTasksBytype() {
      const tasksBytype = {};
      this.tasks.forEach((task) => {
        if (task.type in tasksBytype) {
          tasksBytype[task.type].push(task);
        } else {
          tasksBytype[task.type] = [task];
        }
      });
      console.log("Tasks By type:");
      for (const type in tasksBytype) {
        console.log(`type: ${type}`);
        tasksBytype[type].forEach((task) => {
          console.log(`${task.details} [${task.completed ? "Completed" : "Notcompleted"}]`);
        });
      }
    }
    markTaskAsCompleted(details) {
      const task = this.tasks.find((task) => task.details === details);
  
      if (task) {
        task.completed = true;
        console.log(`Task "${task.type}" marked as complete.`);
      } else {
        console.log(`Task "${type}" not included.`);
      }
    }
    removeTask(details) {
      const taskIndex = this.tasks.findIndex((task) => task.details === details);
  
      if (taskIndex !== -1) {
        const removeTask = this.tasks.splice(taskIndex,1)[0];
        console.log(`Task ${removeTask.details} of type ${removeTask.type} removed from the list.`);
      } else {
        console.log(`Task ${details}  not included.`);
      }
    }
  }
  const toDoList = new ToDoList();
  // Add tasks  with their types
  toDoList.addTask("watch movies", "good");
  toDoList.addTask("Take a walk", "medium");
  toDoList.addTask("wash dishes", "hard");
  toDoList.addTask("make dinner", "difficult");
  
  toDoList.displayTasksBytype();
  toDoList.markTaskAsCompleted("wash dishes");
  toDoList.displayTasksBytype();
  toDoList.removeTask("make dinner");
  toDoList.displayTasksBytype();