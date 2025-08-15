const set1 = "{};,/?:@&=+$#"; // Reserved Characters
const set2 = "-_.!~*'()";   // Unreserved Marks
const set3 = "ABC abc 123"; // Alphanumeric Characters + Space

console.log("encodeURI 1",encodeURI(set1)); // ;,/?:@&=+$#
console.log("encodeURI 2",encodeURI(set2)); // -_.!~*'()
console.log("encodeURI 2",encodeURI(set3)); // ABC%20abc%20123 (the space gets encoded as %20)

console.log("encodeURIComponent 1",encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24%23
console.log("encodeURIComponent 2",encodeURIComponent(set2)); // -_.!~*'()
console.log("encodeURIComponent 3",encodeURIComponent(set3)); 