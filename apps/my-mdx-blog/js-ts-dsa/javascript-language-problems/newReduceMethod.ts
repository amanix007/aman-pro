
if(!Array.prototype.reduce2){
  Array.prototype.reduce2 = function(callBack, initialValue) {
    
   this.forEach(item => {
     initialValue = callBack(initialValue,item)
   }) 
  }
}
let valred = [2,3,1].reduce2((acc, next) => acc + next,0);
console.log("valred",valred);