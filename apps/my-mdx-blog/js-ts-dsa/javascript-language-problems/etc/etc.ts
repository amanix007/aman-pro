
const mul = (number) => {
  return function (l1) {
    return function (l2) {
      return number * l1 * l2
    }
  }

}
const emptyAnarray = () => {
  var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];
  var anotherArr = arrayList;
  // arrayList = [];
  arrayList.length = 0;
  console.log("arrayList", arrayList);
  console.log("anotherArr", anotherArr);
}

export const etc_javascript_problems_function_all = () => {
  emptyAnarray();
  console.log("mul(2)(3)(4):", mul(2)(3)(4)); // output : 24
  console.log("mul(4)(3)(4):", mul(4)(3)(4)); // output : 48
}
