// Dates

let mydate = new Date()
console.log(mydate);
console.log(mydate.toDateString());
console.log(mydate.toLocaleString())
console.log(mydate.toLocaleTimeString('en-IN'));

// let mycreatedDate = new Date(2023,11,23)
// let mycreatedDate = new Date(2023,11,23,14,5)
let mycreatedDate = new Date("2023-01-14")
// console.log(mycreatedDate.toLocaleString())

// let myTimeStamp = Date.now()

// console.log(Math.floor(myTimeStamp/1000));

let newDate = new Date()

console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})