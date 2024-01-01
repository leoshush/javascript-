function ashish(){
    console.log("hello i am ashish ")
}
// ashish()

// function addtwonumbers(number1, number2)
// {
//     console.log(number1 + number2);
// }
function addtwonumbers(number1, number2)
{
     return (number1 + number2);
}
const result = addtwonumbers(12,23)
// console.log(result)

function loginUsermessage(username){
    if(username=== undefined){
     console.log("Please enter a username");
    }
    return `${username} just logged in`
}

// console.log(loginUsermessage("ashish"))

// functions with objects

function calculateCartPrice(val1, ...num1) /* here this ... is rest operator */{
 return num1
}

// console.log(calculateCartPrice(200,400,500))
// 400 , 500 is covered by num1

const user = {
    username: "ashish",
    price :199
}

function handleObject(anyObject){
    console.log(`Usernmae is ${anyObject.username} and price is ${anyObject.price}`);
}

handleObject(user)