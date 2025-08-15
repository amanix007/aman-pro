export function mergetwoJavaScriptObjectdynamically() {
  let person = {
    name: "aman",
    age: 32,
  }
  let address = {
    address1: "wilson road",
    address2: "wilson road 2",
    city: "ngonj"

  }
  const merge = (obj1, obj2) => {
    // return Object.assign(obj1, obj2);

    let mergedObject = obj1;

    if (typeof obj1 === "object" && typeof obj2 === "object") {
      for (let property in obj2) {
        if (obj2.hasOwnProperty(property)) {
          mergedObject[property] = obj2[property]
        }
      }
    } else {
      throw "error not object"
    }
    return mergedObject;

  }
  let fullObject = merge(person, address)
  console.log('fullObject:', fullObject)
}