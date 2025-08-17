
export default function minMaxSum() {
  // get the maximum sum of the array of 4 item
  // get the minimum sum of the array of 4 item
  // What to do ?
  // get all the big 4 numbers 
  // get all the small 4 numbers 
  // sum all the number
  //
console.log("----start---------------")
let arr = [1,3,5,7,9];
let max = -Infinity;
  let min = Infinity;
  let maxSum = 0;
  let minSum = 0;
  let sum = 0;
  
  for(let i = 0; i < arr.length; i++){
    let val = arr[i];
    if( val > max  ){
      max = val;
    }
    sum += val; 
    if(val < min  ){
      min = val;
    }
    

    console.log("min",min);
    console.log("max",max);   
    
  }
  maxSum = sum - min;
  minSum = sum - max;
  
  console.log("----end---------------")

console.log("maxSum",maxSum);
console.log("minSum",minSum);

}
