const user = {
    username: "ashish",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username} welcome to website`)
        // console.log(this)
    }
}

// user.welcomeMessage()

// user.username = "sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username = "ashish"
//     console.log(this)
// }

// chai()

// arrow functions

// const chai = function() {
//     let username = "ashish"
//     console.log(this.username);
// }

const chai = () =>  {
    let username =  "hitesh"
    console.log(this)
}

// chai()

const addTwo = (num1,num2) => {
    return num1 + num2
}

console.log(addTwo(3,4))

