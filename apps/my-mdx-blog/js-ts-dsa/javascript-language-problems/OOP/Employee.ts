var Employee = function (name, company, salary) {
  this.name = name || "";
  this.company = company || "";
  this.salary = salary || 5000;

  this.formatSalary = function () {
    return "$ " + this.salary;
  }
}

Employee.prototype.formateSalary2 = function () {
  return "$ " + this.salary;
}

export const initEmployeeRelatedFunction = () => {
  var employee1 = new Employee("aman ullah", "st", 3000);
  console.log(employee1)
}