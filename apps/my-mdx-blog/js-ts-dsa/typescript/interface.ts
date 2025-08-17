interface User {
  readonly DbID: number;
  email: string;
  userId: number;
  googleID?: string;
  // startTrail: ()=> string;
  startTrail(): string;
  getCoupon(coupon: string): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: "admin" | "ta" | "learner";

}
interface SumperAdmin extends User, Admin {
  SuperRole: "admin" | "ta" | "learner";

}

const aman: Admin = {
  DbID: 33,
  email: "aman",
  userId: 44,
  githubToken: "44",
  role: "admin",
  startTrail: () => {
    return "";
  },
  getCoupon: () => {
    return 10;
  }
}

interface TakePhoto {
  cameraMode: string;
  filter: string;
  brust: number;
}
interface Story {
  createStory(): void;

}

class Instagram implements TakePhoto {

  constructor(public cameraMode: string = "",
    public filter: string = "",
    public brust: number,) {

  }
}
class Youtube implements TakePhoto, Story {

  constructor(public cameraMode: string = "",
    public filter: string = "",
    public brust: number,) {

  }
  createStory(): void {

  }
}
export {

}