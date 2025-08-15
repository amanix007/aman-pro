



// const debounce = (func, wait) => {
//   let timeoutid;
//   return function exec(...args) {

//     clearTimeout(timeoutid);

//     timeoutid = setTimeout(() => {
//       clearTimeout(timeoutid);
//       func(args)
//     }, wait);

//   }

// }
// const inputChange = debounce(() => {
//   console.log();
// }, 300)
// for(let i= 0; i < 5; i++){
//   inputChange()
// }



//<input onchange={e => inputChange(e.target.value)}

export default function Debounce_all() {
  const debounce = (cb, wait) => {
    let timeoutid;
    return function (...args) {
      const context = this;

      clearTimeout(timeoutid);
      timeoutid = setTimeout(() => {
        timeoutid = null;
        func.apply(context, args)
      }, wait);
    }
  }


  const handleChange = (e) => {

  }
  const inputChange = debounce(handleChange, 300)

}