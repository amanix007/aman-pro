
import ConstructorFunction from "./constructorFunction";
import { initEmployeeRelatedFunction } from "./Employee"
import { mergetwoJavaScriptObjectdynamically } from "./mergetwoJavaScriptObjectdynamically";
import { objectCreate } from "./Object"
import PreventObjectModification from "./PreventObjectModification";

// class Potato {
//   constructor() {
//     this.someFunction = this.someFunction.bind2(this)
//   }
//   someFunction() {
//     console.log("this", this);
//   }
// }
// let potato = new Potato();
// potato.someFunction();


export const init_OOP = () => {
  objectCreate();
  initEmployeeRelatedFunction();
  ConstructorFunction();
  PreventObjectModification();
  mergetwoJavaScriptObjectdynamically();


}