







export default function Two_Sum_LeetCode_1() {
  
  const twoSum = function(nums: number[], target:number) {
    let mymap = new Map();
  
  for(let i =0; i< nums.length; i++){
   let currentNumber = nums[i];
   let requiredNumber = target - currentNumber;
   if(mymap.has(requiredNumber)){
     return [mymap.get(requiredNumber), i, ]
   }else{
     mymap.set(currentNumber,i)
    }
  }
  
  };
  
  
  let nums = [2, 7, 10, 1, 11, 15, 9]
  let target = 11
  
  console.log(twoSum(nums, target));
}


const twoSum = ()=> {
  let nums = [2, 7, 10, 1, 11, 15, 9];

  let map = new Map()
  
  let target = 11

   for(let i = 0; i< nums.length; i++){
    let num = nums[i];
let remainingNumber = target - num;
if(map.has(remainingNumber)){
  return [i, map.get(remainingNumber)]
}else{
  map.set(num,i)
}

  }
}