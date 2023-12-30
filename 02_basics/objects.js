//singleton

//object literals
const mysym = Symbol("k")


const jsuser = {
    name:"ashish",
    "full name":"Ashish kumar singh",
    [mysym]: "ash",
    age: 21,
    location: "Jaipur",
    email:"ashish@google.com",
    lastLoginDays: ["Monday","Saturday"]
}
// console.log(jsuser.name)
// console.log(jsuser["full name"])
// console.log(typeof jsuser[mysym])

// Object.freeze(jsuser);
jsuser.email = "singhashish@gmail.com";
// console.log(jsuser)

jsuser.greeting = function() {
    console.log("Hello js user")
}
jsuser.greeting2 = function() {
    console.log(`Hello js user,${this.name}`);
}

console.log(jsuser.greeting2());