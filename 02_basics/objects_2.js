const tinderUser = {}
tinderUser.id = "123abc"

tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ashish",
            lastname : "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}

// const obj3=Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
    {
        id:1,
        email:"h@gmail.com"
    }
]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 console.log(tinderUser.hasOwnProperty('isLoggedIn'))

 // Object destructuring 

 const course = {
    coursename: "js in hindi",
    price : "999",
    courseinstructor : "ashish"
 }

//  course.courseinstructor
const {courseinstructor:instructor} = course

// console.log(courseinstructor);

// console.log(instructor)

// Api 

// {
//     "name": "aman",
//     "coursename" :  "js",
//     "price":"free"
// }
// api can be in the form of arrays also
[
    {
    },
    {},
    {}
]