if (true)
{
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c); -> this value will be printed due to var issue

function one(){
    const username = "ashish"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    console.log(website);
    // two()
}

// one()

// if (true){
//     const username = "ashish"
//     if(username === "ashish")
//      {
//         const website = "youtube"
//         // console.log(username + website);
//      }
    //  console.log(website)
// }
console.log(addone(5))
function addone(num){
    return num  +1 
}

// addone(5)

addTwo(5)
const addTwo = function(num) {
    return num + 2
}




