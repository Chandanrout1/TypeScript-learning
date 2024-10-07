class User {
  email: string;
  name: string;
  city: string = ""
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
const chandan = new User("ch@gmail.com", "chandan");
chandan.city = "keonjhar"

// more precise way

class Char {

    protected _courseCount = 1

    readonly city: string = "keonjhar"
    constructor(
        public email : string,
        public name : string
    ) {}

    private deleteToken () {
        console.log("Token deleted");
    }

    get getMyEmail() : string {
        return `apple${this.email}`
    }

    get courseCount() : number {
        return this._courseCount
    }

    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1")
        }
        this._courseCount = courseNum;
    }
}

class SubUser extends Char {
    isFamily : boolean = true
    changeCourseContent() {
        this._courseCount = 4
    }
}

const chandu = new Char("chandu@gmail.com", "chandu");
