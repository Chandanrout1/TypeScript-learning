// union data type

let score: number | string = 18;

score = 24;
score = "ten";

// multiple

type User = {
  id: number;
  name: string;
};

type Admin = {
  id: number;
  username: string;
};

let chandan: User | Admin = { name: "chandan", id: 118 };

chandan = {id: 128, username: "cr"}


function getDBId(id: number | string) {
    if(typeof id === "string") {
        id.toLowerCase()
    }
}


// unions in array

const data: number[] = [1,2,3]
const data2: string[] = ["chandu", "the"]
const data3: (string | number) [] = ["ch","an", 18 ]

export {};
