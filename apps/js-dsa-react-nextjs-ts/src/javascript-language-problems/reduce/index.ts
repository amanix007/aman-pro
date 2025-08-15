
if(!Function.prototype.bind2){
  Function.prototype.bind2 = function (...args){
    const func = this;
    
    let context = args[0];
    let remainingArgs = args.slice(1);

    return function(...functionInnerParams){
      func.apply(context, [...remainingArgs, ...functionInnerParams]);
    }
  }
}

if(!Array.prototype.reduce2){
  Array.prototype.reduce2 = function(callBack, initialValue) {
    
   this.forEach(item => {
     initialValue = callBack(initialValue,item)
   }) 
  }
}
let valred = [2,3,1].reduce2((acc, next) => acc + next,0);

console.log("valred2",valred);

