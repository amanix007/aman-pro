
// implement getHashCode in String instance

if(!String.prototype.getHashCode){
  String.prototype.getHashCode = function (){
    console.log(this);
  }
}
let s1 = "sample";

console.log(s1.getHashCode());
