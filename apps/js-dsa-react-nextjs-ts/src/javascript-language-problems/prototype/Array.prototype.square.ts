export default function Array_prototype_square(){

Array.prototype.square = function(){
  
  let arr = []
  for( let i =0; i < this.length; i++){
    console.log(i);
arr.push(this[i]*this[i]);
  }
  return arr;
}

// console.log('[1,2,3].square():', [1,2,3,4].square())
}