//if statement
// <,>,<=,>=,==,!=,==,===,!==

// const isUserLoggedin=true
// const tempreture=41
// if(tempreture===40)
// {
// console.log("less than 50")
// }
// else{
// console.log("tempreture is greater than 50");
    
// // }
// const score=200
// if(score>100)
// {
//     const power="fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`);

// const balance=1000

// // if(balance>5000)console.log("test"),console.log("test2");

// if(balance<500)
// {
// console.log("lessthan")
// }
// else if(balance<750)
// {
//     console.log("less than 750")
// }
// else if(balance<900)
// {
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }

const userLoggedIn=true
const debitCard=true
const loogedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard )
{
    // console.log("Allow to buy course");
}
if(loggedInFromEmail || loogedInFromGoogle)
{
    // console.log("user Logged In")
}

//nullish coalescing operator(??):null undefined
// if we are assign null or undefined if it not fonud value than it use another option , second option is applly value if more than value

let val1;
//val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 15

val1=null ?? 10 ?? 20
console.log(val1);

//terniary operator

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80") : console.log("Greaterthan 80");;