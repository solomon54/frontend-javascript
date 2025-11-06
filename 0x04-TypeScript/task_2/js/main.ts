// Interfaces

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes

class Director implements DirectorInterface {
  workFromHome(): string {
    return "Director";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Teacher";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Function to create employee
function createEmployee(salary: number | string): Director | Teacher {
  salary = typeof salary === "number" ? salary : parseInt(salary);
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}
// Example usage
const emp1 = createEmployee(200);
console.log(emp1.workFromHome()); // Cannot work from home

const emp2 = createEmployee(1000);
console.log(emp2.workFromHome()); // Working from home

const emp3 = createEmployee("$500");
console.log(emp3.workFromHome()); // Working from home

/* Function to check if employee is Director
 Type predicate function */
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Function that executes the right work method
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

// Example usage
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
