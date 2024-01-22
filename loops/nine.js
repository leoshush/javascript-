const mynums = [1,2,3]

// const mytotal = mynums.reduce(function(acc,curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// },0)

const mytotal  = mynums.reduce((acc,curval)=>{
    return  acc+curval
},0)
console.log(mytotal)

const shoppingcart = [
    {
        itemname:"js course",
        price:3499,
    },
    {
        itemname:"mobile dev course",
        price:4899,
    },
    {
        itemname:"data science course",
        price:12499,
    },

]

const pricetopay = shoppingcart.reduce((acc,item)=>{
  return  acc +  item.price
},0)

console.log(pricetopay)