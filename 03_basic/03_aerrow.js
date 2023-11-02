const User={
    username:"rinkal",
    price:999,
    welcomeMessage:function()
    {
        // console.log(`${this.username},welcome to website`);
        // console.log(this)
    }

}

//  User.welcomeMessage()
//  User.username="sam"
//  User.welcomeMessage()

// console.log(this)
// function chai()
// {
//     let usernam="rinkal"
//     console.log(usernam)
    
// }
// chai()

// const chai=function()
// {
//     let username="rinkal"
//     console.log(this.username)
// }

const chai = () => {
    let username="rinkal"
    console.log(this)
}
//chai()

// const addTwo=(num1,num2)=> {
//     return num1+num2   //explicit return must write return keyword
// }

// const addTwo=(num1,num2)=> num1+num2 //implicit return not write return keyword

// const addTwo=(num1,num2)=> (num1+num2) // {return must but in } (not necessery return keyword)

const addTwo=()=> ({username:"rinkal"})

console.log(addTwo());

