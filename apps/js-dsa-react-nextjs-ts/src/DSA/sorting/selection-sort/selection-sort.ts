

export default function selectionSort() {


  const selectionSortExecution = (arr: number[]) => {
    var swapped;
    var len = arr.length;

    do {
      for (var i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          var temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped)
  }

  var unsortedArray = [64, 34, 25, 12, 22, 11, 90];
  let sortedArray = selectionSortExecution(unsortedArray)
  console.log('sortedArray:', sortedArray)

}