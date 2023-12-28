// Primitive 

// 7 types : String,Number,Boolean,Null,undefined,Symbol,BigInt

const score  = 100.2
const isLoggedIn = false;
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherid =  Symbol('123')
// console.log(id ===  anotherid);

const bigNumber = 2343642768857698n
// reference type (Non primitive)

//Array , Objects , Functions

const heros = ["shaktiman","naagraj","doga"]
let myobj = {
    name: "ashish",
    age : 22,
}

const myfunc = function() {
 console.log("hello ashish")
}

// console.log(typeof myfunc)

//************************************************************************************************************************************

// Stack(Primitive), Heap (Non-Primitive)

let myyoutubename = "ashishchanclani"
let anothername = myyoutubename
anothername = "chaiwithashish"

// console.log(myyoutubename)
// console.log(anothername)
// when we use primitive data stack is used in which copy of the datatype is provided
// when we use non-primitive reference is given so the original value will also be changed
let userOne = {
    email : "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne
userTwo.email = "ashish@yahoo.com"
console.log(userOne.email)