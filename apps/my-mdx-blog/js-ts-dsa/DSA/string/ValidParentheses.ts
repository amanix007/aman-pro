var isValid = function(s) {
  // declare a starting variable validString variable set to true 

let validString = true; 
  // seperate the string into an array 
const splitArray = s.split("");
console.log(splitArray); 
  console.log('hi')
  // for loop through the string array 
  
if (splitArray.length < 2 || splitArray.length & 2 !== 0) {
  validString = false; 
  return validString;
} 

if (!splitArray.includes(')') && 
   !splitArray.includes('}') &&
   !splitArray.includes(']')
   ) {
  validString = false; 
  return validString;
}

for (let i = 0; i < splitArray.length; i++) {


   if (i > splitArray.length) {
    validString = false; 
    console.log('longer than length')
    return validString
  }

if (splitArray[0].includes(')') ||
    splitArray[0].includes(']') ||
    splitArray[0].includes('}')
   ) {
    validString = false; 
    return validString
   }

  console.log(splitArray[i])    
  if (splitArray[i].includes(')') && splitArray[i-1].includes('(') && i !== 0) {
    splitArray.splice(i - 1, 2)
    i = i - 1
    console.log(splitArray)  
    if (splitArray.length <= 1) {
      return validString
    }
  } else if (splitArray[i].includes(')') && !splitArray[i-1].includes('(') && i !== 0) {
    validString = false; 
    return validString
  }

  if ((!splitArray.includes(')') &&
       !splitArray.includes(']') &&
       !splitArray.includes('}')) 
   ) {
    
    validString = false; 
    console.log('what')
    console.log(splitArray)
    return validString
  }



  if (splitArray[i].includes(']') && splitArray[i-1].includes('[') && i !== 0) {
    splitArray.splice(i - 1, 2)
    i = i - 1
    console.log(splitArray)    
    if (splitArray.length  <= 1) {
      return validString
    }
    
  } else if (splitArray[i].includes(']') && !splitArray[i-1].includes('[') && i !== 0) {
    validString = false; 
    return validString
  }

  if ((!splitArray.includes(')') &&
       !splitArray.includes(']') &&
       !splitArray.includes('}')) 
   ) {
    
    validString = false; 
    console.log('what')
    console.log(splitArray)
    return validString
  }

 

  if (splitArray[i].includes('}') && splitArray[i-1].includes('{') && i !== 0) {
    splitArray.splice(i - 1, 2)
    i = i - 1
    console.log(splitArray)  
    if (splitArray.length  <= 1) {
      return validString
    }
  } else if (splitArray[i].includes('}') && !splitArray[i-1].includes('{') && i !== 0) {
    validString = false; 
    return validString
  }



  if ((!splitArray.includes(')') &&
       !splitArray.includes(']') &&
       !splitArray.includes('}')) 
   ) {
    
    validString = false; 
    console.log('what')
    console.log(splitArray)
    return validString
  }

 


}
      
  // if the next index (i=+i) is the opposite on i 
      // then proceed to the next index (i+2)
  
  // if is not the opposite of i 
      // reassign the validString variable to false 
          // return validString variable 
  
  // if we iterate through the entire array
      // return validString

  
  return validString;
  
};


// console.log(isValid('()')) // expect true 
// console.log(isValid('()[]{}')) // expect true 
// console.log(isValid('()()((()))')) // expect false 
// console.log(isValid('{[]}')) // expect true
// console.log(isValid('((')) // expect false
// console.log(isValid('){')) // expect false
console.log(isValid('([]){')) // expect false
// console.log(isValid('[[[]')) // expect false
"[({(())}[()])]"

console.log(isValid("[({(}[()])]")) // expect true







