// object create

export const objectCreate = () => {
  const obj = {
    name: "potato",
    printIntro: function () {
      console.log(this.name);
    }
  }
  let myobj = Object.create(obj);

  console.log('myobj:', myobj)
  // [[Prototype]]: {
  //   "name": "potato"
  // "printIntro": function
// }

}
