import { BlobOptions } from "buffer";

const score: Array<string> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return 10;
}

function identityTwo(val: any): any {
  return 10;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
function identityFour<T>(val: T): T {
  return val;
}
interface Bottle {
  brand: string,
  type: number
}
identityFour<Bottle>({
  brand: "dd",
  type: 22,
});


function getSearchProducts<T>(V: T[]): T {
  return V[0];
}
const getSearchProductsArrowFunction = <T>(v: T[]): T => {
  return v[0];
}

interface DataBase {
  connection: string,
  username: string,
  password: string
}
function anotherFunction<T, U extends DataBase>(V1: T, V2: U): T {
  return V1;
}

interface Quiz {
  name: string,
  type: string
}

interface Course {
  name: string,
  author: string,
  subject: string
}

class Sellable<T>{
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product)
  }
}

export {

}