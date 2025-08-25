
import ArrayPrototypeFilter from './ArrayPrototypeMyFilterDocumentation.mdx';

declare global {
  interface Array<T> {
    myFilter(
      callback: (value: T, index: number, array: T[]) => boolean,
      callBackContext?: unknown
    ): T[];
  }
}


export default function ArrayPrototypeMyFilterComponent() {
  ArrayPrototypeMyFilter();

  return (
    <div>
      <ArrayPrototypeFilter
      />
    </div>
  )
}
function ArrayPrototypeMyFilter() {
  Array.prototype.myFilter = function (passedLogicCheck, callBackContext) {
    // TODO: Add TS support in all the functions
    if (this == null) {
      throw new TypeError("Passed array is null or undefined");
    }
    if (typeof passedLogicCheck !== "function") {
      throw new TypeError("callback function is not passed");
    }

    const resultArray = [];

    const originalArray = Object(this);
    const length = originalArray.length >>> 0;

    for (let index = 0; length > index; index++) {
      if (index in originalArray) {
        if (
          passedLogicCheck.call(
            callBackContext,
            originalArray[index],
            index,
            originalArray
          )
        ) {
          resultArray.push(originalArray[index]);
        }
      }
    }
    return resultArray;
  };
  const numbers : number[] = [1, 2, 3, 4, 5, 7];
  const passed_context = {
    max: 4,
  };
  const filteredData = numbers.myFilter(function (this: { max: number }, currentElement, index) {
    if (currentElement > this.max) {
      console.log("index:", index, "number:", numbers[index]);
      return true;
    } else {
      return false;
    }
  }, passed_context);

  console.log("filteredData:", filteredData);
}