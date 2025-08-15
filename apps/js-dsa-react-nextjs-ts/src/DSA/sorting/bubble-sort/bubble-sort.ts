import { SORT_COMPARE, SORT_defaultCompare, SORT_swapItem } from "src/DSA/sorting/sorting";


export default function bubbleSort() {
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

  




}

