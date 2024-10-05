// string array type

const superHeros: string[] = ["hari", "harish",]

const heroPower: Array<string> = []

// number array type

const marks: number[] = []

const numberScored: Array<number> = []

const MLmodels: number[][] = []

// custom array

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

const allUser: User[] = []

allUser.push({name: "", email: "", isActive: true})


export {}