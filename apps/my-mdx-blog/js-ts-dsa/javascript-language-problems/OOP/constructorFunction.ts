export default function ConstructorFunction() {
  function Person(name, age, salary) {
    this.name = name || "Aman";
    this.age = age;
    this.salary = salary;
    this.incrementSalary = function (amount) {
      this.salary = this.salary + amount;
    }
  }





  let person = new Person("aman", 32, 200)
  person.incrementSalary(500)

  console.log(person);

  function Employee(company) {
    this.company = company;
  }

  Employee.prototype = new Person("Ullah", 31, 200);
  var emp1 = new Employee("Google");
  console.log("emp1", emp1)
  console.log(emp1 instanceof Employee)
  console.log(emp1 instanceof Person)
  let obj = {};
  Person.call(obj);
  console.log(obj)

}
