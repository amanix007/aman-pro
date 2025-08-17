export default function onceLodash() {

  const RunConsolLog = () => {
    console.log("onceLodash - hit")
  }
  function once(func) {
    let result = null;
    return function () {
      if(func){
         result = func.apply(this, arguments);
        func = null
      }
    }
    return result;
  }

}