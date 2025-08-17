
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


  private readonly city: string = "Dhaka";
  constructor(public email: string,
    public name: string,
    private userID?: string
  ) {

  }
  private deleteToken = () => {

  }
}
const aman = new User("aman@st.com", "aman");
// aman.city;
export { }