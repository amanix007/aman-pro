import Big_O_Notation from "src/DSA/Big_O_Notation/Big_O_Notation";
import selectionSort from "src/DSA/sorting/selection-sort/selection-sort"
import bubbleSort from "./bubble-sort/bubble-sort"


export function SORT_swapItem(arr: number[], a: number, b: number) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;

}

export const SORT_COMPARE = {
  LESS_THAN: -1,
  BIGGER_THAN: 1,
}
export function SORT_defaultCompare(a: number, b: number) {
  if (a === b) {
    return 0;
  }
  return a < b ? SORT_COMPARE.LESS_THAN : SORT_COMPARE.BIGGER_THAN;
}


function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
};

function defaultCompare(a, b) {
  if (a === b) {
    return 0;
  }
  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN;
}

var unsortedArray = [64, 34, 25, 12, 22, 11, 90];


const bubbleSort_1 = (arr: number[]) => {
  const { length } = arr;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1 - i; j++) { // refer to note below
      if (defaultCompare(arr[j], arr[j + 1]) === Compare.BIGGER_THAN) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

let bubbleSort_1_sortedArray = bubbleSort_1(unsortedArray)
console.log('bubbleSort_1_sortedArray:', bubbleSort_1_sortedArray)

function selectionSort(arr, compare = defaultCompare) {
  const { length } = arr;
  let minIndex;
  for (let i = 0; i < length - 1; i++) {
    minIndex = i;
    for (let j = i; j < length; j++) {
      if (compare(arr[minIndex], arr[j] === Compare.BIGGER_THAN)) {
        minIndex = j
      }
    }
    if (i !== minIndex) {
      swap(arr, i, minIndex)
    }
  }
  return arr;
}

function insertionSort(arr, compare = defaultCompare) {
  const { length } = arr;
  let temp;
  for (let i = 1; i < length; i++) {
    let j = i;
    temp = arr[i];
    while (j > 0 && compare(arr[j - i], temp) === Compare.BIGGER_THAN) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = temp;
  }
  return arr;
}

export default () => {

  Big_O_Notation();
}