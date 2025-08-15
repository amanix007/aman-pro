const init_closure_exmaple_1 = () => {
  const globarl_var = 300;
  (function outerFunc() {
    var outerFuncVariable = 3;
    (function InnerFunction(innerArg) {
      var innerFuncVariable = 4;
      console.log('globarl_var:', globarl_var)
      console.log('outerFuncVariable:', outerFuncVariable)
      console.log('innerFuncVariable:', innerFuncVariable)
      console.log('innerArg:', innerArg)
    })(5)
  })();
}

export const all_clousure_problems = () => {
  init_closure_exmaple_1();
}