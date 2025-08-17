export default function PreventObjectModification() {
  let employee = {
    name: "aman"
  }

  // Object.preventExtensions(employee);
  Object.seal(employee);
  console.log(Object.isExtensible(employee));
  console.log(Object.isSealed(employee));
  console.log(Object.freeze(employee));


  // employee.age = 40;
  console.log(employee);
}