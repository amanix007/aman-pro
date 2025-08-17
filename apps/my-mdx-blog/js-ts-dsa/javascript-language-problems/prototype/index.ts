import ArrayPrototypeMyreduce from "./Array.prototype.myReduce";
import Array_prototype_square from "./Array.prototype.square";


// class Parent {
//   constructor(name){
//     this.name = name;
//   }
//   getName() {
//     return this.name
//   }
// }

// class Child extends Parent{
//   constructor(props){
//     super(props);
//   }
// }

// let pr = new Parent("dada");


// function Parent (name){
//   this.name = name;
// }
// Parent.prototype.getName = function(){
//   return this.name
// }

// function Children(name){
//   Parent.call(this,name);
// }
// Children.prototype = new Parent();









// // implement getHashCode in String instance

// if(!String.prototype.getHashCode){
//   String.prototype.getHashCode = function (){
//     console.log(this);
//   }
// }
// let s1 = "sample";

// console.log(s1.getHashCode());

export function prototype(){
  Array_prototype_square()
  ArrayPrototypeMyreduce()
}