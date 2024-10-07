"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const chandan = new User("ch@gmail.com", "chandan");
chandan.city = "keonjhar";
// more precise way
class Char {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "keonjhar";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getMyEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends Char {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseContent() {
        this._courseCount = 4;
    }
}
const chandu = new Char("chandu@gmail.com", "chandu");
