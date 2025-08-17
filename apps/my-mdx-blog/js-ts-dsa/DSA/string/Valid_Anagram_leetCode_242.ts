export default function Valid_Anagram_leetCode_242() {
  function anagramProblem1(){
  const firstString = "anagram";
  const secondString = "nagaram";
  let verdict = true;
  let hashMap = {};

  for(let i =0; i< firstString.length; i++){
    if(!hashMap[firstString[i]]){
      hashMap[firstString[i]] = 0;
    }
    hashMap[firstString[i]]++
  }
  console.log(hashMap);
  if(firstString.length !== secondString.length){
    verdict = false;
  }
  for(let i = 0; i< secondString.length; i++){
    if(!hashMap[secondString[i]]){
      verdict = false;
    }

    hashMap[secondString[i]]--;
  }
console.log("isAnagram:",verdict);    
  }



  
  

const checkIfItHasAnagram = (string, array)=> {
  console.log("hit");
   let stringHashMap = {};
    
    for(let s = 0; s < string.length; s++){
      let letter = string[s];
      if(!stringHashMap[s]){
        stringHashMap[letter] = 0;
      } 
      stringHashMap[letter]++;
    }
    
  let foundAnagram = false;
  for (let i = 0; i < array.length; i++){
    let innerString = array[i];
    
    // if(string.length !== item.length){
    //   foundAnagram = false;
    //   return false;
    // }
    
    let hashMap = {};
    for(let j = 0; j < innerString.length; j++){
      
      let letter = innerString[j];
      if(!hashMap[j]){
        hashMap[letter] = 0;
      } 
      hashMap[letter]++;
    }
    
    for(const property in hashMap){
      hashMap[stringHashMap[property]]--;
    }
    
    
    console.log(hashMap)
    
    
    
    
    
    
    
  }
  
  return foundAnagram;
  
}


checkIfItHasAnagram("abc",["ba", "cbd", "c"]);
}


// Installed npm packages: jquery underscore request express
// jade shelljs passport http sys lodash async mocha chai sinon
// sinon-chai moment connect validator restify ejs ws co when
// helmet wrench brain mustache should backbone forever debug jsdom

// var _ = require('underscore');

// var evens = _.reject([1, 2, 3, 4, 5, 6], (num) => num % 2 != 0);

// console.log("Evens");
// console.log(evens);




