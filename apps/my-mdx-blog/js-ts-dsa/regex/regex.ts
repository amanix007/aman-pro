// select string to the begining from '@'
let email = "_@gmail.com";

let result = email.match(/^[A-Za-z0-9._%+-]{3,100}@./);
console.log(result);
//