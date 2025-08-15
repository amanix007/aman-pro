abstract class TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,

  ) {
  }
  abstract getSepia(): string;
  getReels(): number {
    return 4;
  };
}
// let aman = new TakePhoto("cameraMode", "filter");
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number
  ) {
    super(cameraMode, filter)
  }

  getSepia(): string {
    console.log("hit");
    return "hit";
  }
}
let aman = new Instagram("cameraMode", "filter", 33);
export {

}