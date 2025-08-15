
interface IPrototype { prototype: any; }

export default function flattenArray() {
  // function flattenArrayWithReduce(arr) {
  //   return arr.reduce((acc, next) => {
  //     let isArray = Array.isArray(next);
  //     return acc.concat(isArray ? flattenArray(next) : next)

  //   }, [])
  // }
  type NestedArray<T> =  Array<T> | Array<NestedArray<T>>
  type Both = number | number[]
  function flattenArrayWithArrayOnly(arr: Both[]): number[] {
    let returningArray: number[] = [];
    function flatten(innerArray: Both[]) {

      for (let i = 0; i < innerArray.length; i++) {
        let val: Both = innerArray[i];
        let isArray = Array.isArray(val);
        console.log('isArray:', isArray)
        if (typeof val === "number") {
          returningArray.push(val);
        } else {
          // flatten(innerArray);
        }
      }
    }
    flatten(arr);

    console.log('returningArray:', returningArray)
    return returningArray;
  }
  // if (!Array.prototype.flattenArray) {
  //   // Array.prototype.flattenArray = function(){
  //   //  return flattenArrayWithReduce(this);
  //   // }
  //   Array.prototype.flattenArray = function () {
  //     return flattenArrayWithArrayOnly(this);
  //   }
  // }

  let multiLevelArr: Both[] = [1, 2, [3, 4, [5, 6, [7, [8, 9, 10]]]]]
  // console.log("multiLevelArr: dd", multiLevelArr.flattenArray());
  console.log("multiLevelArr: dd", flattenArrayWithArrayOnly(multiLevelArr));

}