//reduce 
const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc= ${acc} and currval ${currval}`)
//     return acc+currval
// },0)

const myTotal=myNums.reduce((acc,currval)=> acc+currval,0)

console.log(myTotal)

const shoppingCart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"python",
        price:999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },
    {
        itemname:"Data science course",
        price:12999
    },

]

const pricetopay=shoppingCart.reduce((acc,item)=> acc+item.price,0)
console.log(pricetopay);