
// class User {
//   public email: string;
//   name: string;
//   // #name: string;
//   private readonly city: string = "Dhaka";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }
class User {
  private _courseCount: number = 1;

  private readonly city: string = "Dhaka";
  constructor(public email: string,
    public name: string,
    private userID?: string
  ) {

  }

  get GetAppleEmail(): string {
    return "{}"
  }
  get courseCount(): number {
    return this._courseCount;
  }
  set courseCount(courseNumber: number) {
    this._courseCount = courseNumber;
  }
}
const aman = new User("aman@st.com", "aman");
// aman.city;
export { }