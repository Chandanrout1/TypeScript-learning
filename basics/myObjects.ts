// const user = {
//   name: "chandan",
//   email: "chandan@gmail.com",
//   isActive: true,
// };

// function createUsers({ name: string, isPaid: boolean }) {}

// let newUser = { name: "chandan", isPaid: true, email: "ch@gm.com" };

// createUsers(newUser);

// to create a object

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// function createUser(user: User): User {
//     return {name:"chandan", email:"ch@gmial.com", isActive: false}
// }

// createUser({name: "", email: "", isActive: true})

type UserDetails = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  cardDetails?: number; 
};

let user1: UserDetails = {
    _id: "1234",
    name: "chandan",
    email: "chr@gmial.com",
    isActive: true
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

export {};
