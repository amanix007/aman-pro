let score: number | string = 33;

type User = {
  name: string;
  id: number;
}
type Admin = {
  username: string;
  id: number;
}

let user: User | Admin = {
  name: "aman",
  username: "aman",
  id: 20
}

function getDbId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toLowerCase());
  }
}

// const data: Array<number | string> = [1, 2, 3, "4"];
const data: (number | string)[] = [1, 2, 3, "4"];
type SeatAllotmentType = "aisle" | "window" | "middle";

let seatAllotment: SeatAllotmentType = "aisle"



interface Circle {
  kind: "circle",
  radius: number
}
interface Square {
  kind: "square"
  side: number
}

interface Rectangle {
  kind: "rectangle",
  leght: number,
  widht: number,
}
type Shape = Circle | Square;
function getTrueShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side * shape.side;
}
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2
    case "square":
      return shape.side * shape.side;
    default:
      const _defaultShape: never = shape;
      return _defaultShape;
  }
}
export { }