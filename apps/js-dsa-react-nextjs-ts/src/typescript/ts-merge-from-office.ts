// object
// type User = {
//   name: string;
//   email: string;
//   active: boolean;

// }

// function createUser(user: User): User {
//   return user;
// }
// createUser({ name: "aman", email: "amanix007@gmail.com", active: true });

type UserRO = {
  readonly _id: string;
  name: string;
  email: string;
  active: boolean;
  creditCard?: string;

}

let myUserRO: UserRO = {
  _id: "200",
  name: "aman",
  email: "aman@st.com",
  active: true,
}
// myUserRO._id = 30;

type CardNumber = {
  cardNumber: string;
}
type CardDate = {
  cardDate: string;
}

type cardDetails = CardNumber & CardDate & { cvv: number }
export { };