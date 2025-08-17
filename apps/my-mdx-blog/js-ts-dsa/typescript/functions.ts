function addTwo(num: number) {
  return num + 20;
}
function getUpper(val: number): number {
  return val + 2;
}

function signupUser(name: string, email: string, isPaid: boolean = false) {

}

addTwo(5);
getUpper(4);

function getValue(myVal: number): boolean | string {
  if (myVal > 5) {
    return true;
  }
  return "200 ok"
}

const getHellow = (s: string): string => {
  return "";
}

const heros = ["iron Man", "thor"];

heros.map((hero): string => {
  return `hero is ${hero}`
})



function consoleError(errmsg: string): void {
  console.log(errmsg)
}

function consoleError2(errmsg: string): never {
  throw new Error(errmsg);
}