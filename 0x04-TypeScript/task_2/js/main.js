// Interfaces
// Classes
class Director {
    workFromHome() {
        return "Director";
    }
    getCoffeeBreak() {
        return "Getting a coffee break";
    }
    workDirectorTasks() {
        return "Getting to director tasks";
    }
}
class Teacher {
    workFromHome() {
        return "Teacher";
    }
    getCoffeeBreak() {
        return "Cannot have a break";
    }
    workTeacherTasks() {
        return "Getting to work";
    }
}
// Function to create employee
function createEmployee(salary) {
    salary = typeof salary === "number" ? salary : parseInt(salary);
    if (salary < 500) {
        return new Teacher();
    }
    else {
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
export function isDirector(employee) {
    return employee instanceof Director;
}
// Function that executes the right work method
function executeWork(employee) {
    if (isDirector(employee)) {
        return employee.workDirectorTasks();
    }
    else {
        return employee.workTeacherTasks();
    }
}
// Example usage
console.log(executeWork(createEmployee(200))); // Getting to work
console.log(executeWork(createEmployee(1000))); // Getting to director tasks
//# sourceMappingURL=main.js.map