function detectType(val: number | string) {
  if (typeof val === "string") {
    return val.toLowerCase();
  } else if (typeof val === "number") {
    return val;

  }
}

interface User {
  name: string,
  email: string
}
interface Admin {
  name: string,
  email: string,
  isAdmin: boolean
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }

}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase())
  }
}



type Fish = { swim: () => void };
type Bird = { fly: () => void };


function IsFish(pet: Fish | Bird):pet is Fish {
  return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
  if (IsFish(pet)) {
    return "Fish Food"
  } else {
    return "Bird Food"
  }
}
