export default function uniqueArray() {
  let array: number[] = [1, 1, 2, 6, 7, 7, 8, 9, 6, 8];
// indexOf gives the first matching element, so the on filter next un matched element unfilterd out
  let uniq = array.filter((num, i) => array.indexOf(num) === i);

  let uniq2 = [...new Set(array)];
  // checks if the current element excists in the accumulator array, if not present add it else return the old accumulator array
  let uniq3: number[] = array.reduce((acc, current) => {
    if (!acc.includes(current)) {
      return [...acc, current];
    } else {
      return [...acc]
    }
  }, []);
  console.log('uniqueArray 1:', uniq);
  console.log('uniqueArray 2:', uniq2);
  console.log('uniqueArray 3:', uniq3);
}
