
import React from 'react'
import ArrayPrototypeFilter from './array-prototype-reduce.mdx';

// Extend the Array interface to include myReduce
// declare global {
//   interface Array<T> {
//     myReduce(callbackFn: (accumulator: T, currentValue: T, currentIndex: number, array: T[]) => T, initialValue?: T): T;
//   }
// }

const ArrayPrototypeMyReduce = () => {

  /**
   * @callback callbackFn
   * @param {*} [initialValue]
   * @return {Array}
   */

  Array.prototype.myReduce = function(callback, initialValue) {
    // Check if callback is a function
    if (typeof callback !== 'function') {
        throw new TypeError('Callback must be a function');
    }
    
    // Handle empty array case
    if (this.length === 0 && arguments.length < 2) {
        throw new TypeError('Reduce of empty array with no initial value');
    }
    
    let accumulator;
    let startIndex;
    
    // Determine starting conditions based on whether initialValue is provided
    if (arguments.length >= 2) {
        // Initial value is provided
        accumulator = initialValue;
        startIndex = 0;
    } else {
        // No initial value provided, use first element as accumulator
        accumulator = this[0];
        startIndex = 1;
    }
    
    // Iterate through the array starting from startIndex
    for (let i = startIndex; i < this.length; i++) {
        // Skip holes in sparse arrays (elements that don't exist)
        if (i in this) {
            accumulator = callback(accumulator, this[i], i, this);
        }
    }
    
    return accumulator;
}

// Basic sum example
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.myReduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Without initial value
const product = numbers.myReduce((acc, curr) => acc * curr);
console.log(product); // 120

// Object transformation
const items = ['apple', 'banana', 'cherry'];
const itemCount = items.myReduce((acc, item, index) => {
    acc[item] = index;
    return acc;
}, {});
console.log(itemCount); // { apple: 0, banana: 1, cherry: 2 }

// Flattening arrays
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.myReduce((acc, curr) => acc.concat(curr), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]




// This should throw an error
try {
    [].myReduce((a, b) => a + b);
} catch (e) {
    console.log(e.message); // "Reduce of empty array with no initial value"
}

// // This should work fine
// const result = [].myReduce((a, b) => a + b, 0);
// console.log(result); // 0



// const sparse = [1, , , 4, 5]; // Array with holes
// const sum = sparse.myReduce((acc, curr) => acc + curr, 0);
// console.log(sum); // 10 (skips the undefined elements)


// const single = [42];
// console.log(single.myReduce((a, b) => a + b)); // 42 (no callback execution)
// console.log(single.myReduce((a, b) => a + b, 10)); // 52 (callback executes once)


}
export default function Page() {
  ArrayPrototypeMyReduce();

  return (
    <div>
      <ArrayPrototypeFilter
      />
    </div>
  )
}
