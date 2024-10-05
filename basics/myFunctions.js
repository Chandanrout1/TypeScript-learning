"use strict";
// without types
Object.defineProperty(exports, "__esModule", { value: true });
function addFive(num) {
    return num + 5;
}
addFive(5);
// with types
function addTwo(num) {
    return num + 5;
}
addTwo(2);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("chandan");
function signUpUser(name, email, age) {
    console.log("hi ".concat(name));
}
signUpUser("chandan", "cr@gmail.com", 18);
var loginUser = function (email, password, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
    console.log("you are logged in");
};
loginUser("c@g.com", "12312");
var getHello = function (name) {
    return "Hello ".concat(name);
};
getHello("chandan");
var heros = ["Ironman", "Thor", "chandan"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errMsg) {
    console.log(errMsg);
}
function handleError(errMsg) {
    throw new Error(errMsg);
}
