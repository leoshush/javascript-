const marvel_heroes = ["thor","Ironman","spiderman"]
const dc = ["superman","flash","batman"]

// marvel_heroes.push(dc)


// const new_heroes = marvel_heroes.concat(dc)
// console.log(new_heroes)

//spread operator

// const all_new_heroes = [...marvel_heroes, ...dc]
// console.log(all_new_heroes);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(2)
// console.log(real_another_array)

// console.log(Array.from("Ashish"))
// console.log(Array.from({name:"hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 =300

console.log(Array.of(score1,score2,score3))
