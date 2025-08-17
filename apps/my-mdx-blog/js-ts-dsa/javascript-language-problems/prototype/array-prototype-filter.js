export default function ArrayPrototypeMyFilter() {
//   Array.prototype.myFilter = function(testFunction, context) {
//   // Validate inputs
//   if (this == null) {
//     throw new TypeError('myFilter called on null or undefined');
//   }
  
//   if (typeof testFunction !== 'function') {
//     throw new TypeError(testFunction + ' is not a function');
//   }

//   // Setup variables
//   const originalArray = Object(this);
//   const arrayLength = originalArray.length >>> 0;
//   const filteredArray = [];

//   // Filter elements
//   for (let index = 0; index < arrayLength; index++) {
//     // Check if index exists (handles sparse arrays)
//     if (index in originalArray) {
//       const currentElement = originalArray[index];
      
//       // Test element and add if it passes
//       if (testFunction.call(context, currentElement, index, originalArray)) {
//         filteredArray.push(currentElement);
//       }
//     }
//   }

//   return filteredArray;
// };
// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.myFilter(num => num % 2 === 0);
// console.log(evenNumbers); // [2, 4]

// // With context (thisArg)
// const config = { threshold: 3 };
// const filtered = numbers.myFilter(function(num) {
//   return num > this.threshold;
// }, config);
// console.log(filtered); // [4, 5]



Array.prototype.myFilter = function(testCallBack, callBackContext){
  // TODO: Add TS support in all the functions
  if(this == null){
    throw new TypeError("Passed array is null or undefined")
  }
  if(typeof testCallBack  !== "function"){
    throw new TypeError("callback function is not passed")
  }

  const resultArray = [];



}
const numbers = [1,2,3,4,5,7];
const passed_context = {
  max: 4
}
numbers.myFilter((currentElement, index)=> {
  if(currentElement > this.max){
    console.log(index)
    return true  
  }else{
    return false;
  }
}, passed_context);



}


