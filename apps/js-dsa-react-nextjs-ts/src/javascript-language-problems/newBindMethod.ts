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


class Potato {
  constructor(){
    this.someFunction = this.someFunction.bind2(this)
  }
  someFunction  (){
    console.log("this",this);
  }
}
let potato =  new Potato();
potato.someFunction();