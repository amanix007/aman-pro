export default function ArrayPrototypeMyreduce(){

/**
 * @callback callbackFn
 * @param {*} [initialValue]
 * @return {Array}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  // if no initial value the first item is accumulator and the secon element is the current item
  // os if no initial value is set starting index is 1;
  // if no initial value and array length is zero throw an TypeError("");
  // 
  let length = this.length;

  let initialValueNotPresent = initialValue === undefined;
  if(initialValueNotPresent && length === 0){
    throw new TypeError("no values")
  }
let startingIndex = initialValueNotPresent  ? 1 : 0;
let accumulator = initialValueNotPresent ? this[0] : initialValue;
for(let i = startingIndex; i < length; i++){
  if(Object.hasOwn(this,i)){
  accumulator = callbackFn(accumulator, this[i],i, this);
  }
}
return accumulator;


};

[1, 2, 3, 4].reduce((acc, currentVal, index, arr) => { }, 10)
}