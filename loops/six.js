// const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })
// // foreach does not return values
// console.log(values)

const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.filter( (nums) => {
//     return nums> 4
// })

const newnums = []
mynums.forEach((num)=> {
    if(num>4){
        newnums.push(num)
    }
})
console.log(newnums);

const books =[
    {title: 'Book One' , genre:'Fiction',publish:1981,edition:2004},  
    {title: 'Book Two' , genre:'Non-Fiction',publish:1992,edition:2008},
    {title: 'Book Three' , genre:'History',publish:1999,edition:1999},
    {title: 'Book Four' , genre:'Non-Fiction',publish:1989,edition:1989},
    {title: 'Book Five' , genre:'Science',publish:2009,edition:2009},
    {title: 'Book Six' , genre:'Fiction',publish:1987,edition:1987},
    {title: 'Book Seven' , genre:'History',publish:2011,edition:1986},

]

// const userBooks = books.filter((bk) => bk.genre === 'History')
const userBooks = books.filter((bk)=>{return bk.edition > 2000})
console.log(userBooks)