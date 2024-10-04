// without types

function addFive(num) {
  return num + 5;
}

addFive(5);

// with types

function addTwo(num: number): number {
  return num + 5;
}

addTwo(2);

function getUpper(val: string) {
  return val.toUpperCase();
}

getUpper("chandan");

function signUpUser(name: string, email: string, age: number) {
  console.log(`hi ${name}`);
}

signUpUser("chandan", "cr@gmail.com", 18);

let loginUser = (email: string, password: string, isPaid: boolean = false) => {
  console.log("you are logged in");
};

loginUser("c@g.com", "12312");

const getHello = (name: string): string => {
  return `Hello ${name}`;
};

getHello("chandan");

const heros = ["Ironman", "Thor", "chandan"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errMsg: string): void {
  console.log(errMsg);
}

function handleError(errMsg: string): never {
  throw new Error(errMsg);
}

export {};
