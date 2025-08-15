


export default function lonelyinteger(a=[1,2,3,4,3,2,1]) {
  console.log("lonelyinteger ----star---------------");
  let map = {};

  for (let i = 0; i < a.length; i++) {
      let num = a[i];
      if (map[`${num}`]) {
          map[`${num}`] -= 1;
      } else {
          map[`${num}`] = 1;
      }
  }

  let val = 0;
  console.log(map)
  for (const prop in map) {
      if (map[prop] === 1) {
          val = prop;
      }
  }
  console.log(val)
  console.log("lonelyinteger ----end---------------")
  return val;


}
