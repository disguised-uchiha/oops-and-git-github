
// ---- class in js
// some new changes
class EmployeeRecord {
  firstName = "";
  lastName = "";

  constructor(firstName, lastName) {
    console.log("constructor called")
    this.firstName = firstName;
    this.lastName = lastName;
  }

  set employeeFirstName(firstName) {
    this.firstName = firstName
  }

  employeeFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}
const employee1 = new EmployeeRecord("Harsh", "Test");
console.log(employee1.firstName)
const employee1 = {firstName: 'Harsh', lastName: }
employee1.employeeFirstName = "JOE"
console.log(employee1.firstName)
console.log(employee1.employeeFullName())





// -- polymorphism
class Shape {
  category="2D"
  area() {
      return 0;
  }
}

class Circle extends Shape {
  radius = 0;
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius
  }
}

const circle = new Circle(5)
console.log(circle.area)