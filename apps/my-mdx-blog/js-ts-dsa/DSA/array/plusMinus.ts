

export default  function plusMinus (arr = [-4,3,-9,0,4,1]) {

let length = arr.length;
let positive = 0,negative = 0,zero=0 ;
  for(let i =0; i< length;i++){
    let num = arr[i];
    if(num > 0){
      positive += 1;
    }else if(num < 0){
      negative += 1;
    }else if(num === 0){
      zero += 1;
    }
  }

  console.log((positive/length).toFixed(6))
  console.log((negative/length).toFixed(6))
  console.log((zero/length).toFixed(6))



}