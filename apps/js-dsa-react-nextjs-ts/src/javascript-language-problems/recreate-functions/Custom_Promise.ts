/*
receives a call back function which have, resolved and reject parameter.
promise is not just for network request, it could be a syncronus computations too.
if its
*/
// class CustomPromise {
//   state = 'PENDING'; // SUCCESS | ERROR
//   value = undefined;
//   thenCallbacks = [];
//   errorCallbacks = [];
//   constructor(callBack) {
//     callBack(this.resolve.bind(this), this.reject.bind(this));
//   }

//   resolve(val) {
//     this.state = 'SUCCESS';
//     this.value = val;
//     this.thenCallbacks.forEach((cb) => cb(this.value));
//   }
//   reject(val) {
//     this.state = 'ERROR';
//     this.value = val;
//     this.errorCallbacks.forEach((cb) => cb(this.value));
//   }
//   then(callBack) {
//     this.thenCallbacks.push(callBack);
//     return this;
//   }
//   catch(callBack) {
//     this.errorCallbacks.push(callBack);
//     return this;
//   }
// }

// const promise = new CustomPromise();

// promise.then((resolve, reject) => {
//   let arr = [2, 3, 4];

//   arr.forEach((val) => (val % 2 === 0 ? resolve('done') : reject('error')));
// }).then().then().catch().then();

// class CustomPromise {
//   constructor(cb){

//   }


// }

// const myPromise = new CustomPromise((resolve, reject) => {
//   const somethingSuccesssful = () => {};
//   if (somethingSuccesssful()) {
//     let successObject = {
//       success: true,
//       message: 'success',
//       data: 'potato',
//     };
//     resolve(successObject);
//   } else {
//     let erroObject = {
//       success: false,
//       message: 'error',
//       data: null,
//     };
//     reject(erroObject);
//   }
// });

// myPromise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((e) => {
//     console.error(e);
//   });


export default function Custom_Promise() {


  class PromiseNew {
    constructor(cb){
  
    }
  }
  // let MyPromise = new PromiseNew((resolve, reject) => {
  //   setTimeout(() => {

  //     resolve("response")

  //   }, 300);

  //   reject("reject")
  // });

  // MyPromise.then((firstFunctionsParamSuccessValue) => {

  // },
  //   (secondFunctionParamErrorValue) => {

  //   }
  // )


  // its a class
  // has a call back
  // which has two function resolve and reject
  // resolves when something executed successfully
  // rejects when something execution falied
  // state managed based on success or fail of the execution

      
  // call back has resolve reject
  // class created object has unlimited then class method
  // class created object has unlimited catch call back
  // then callback has a success value
  // catch call back has a error value
}