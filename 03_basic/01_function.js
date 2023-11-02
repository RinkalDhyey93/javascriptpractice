function sayMyName()
{
    
    console.log("R");
    console.log("I");
    console.log("N");
    console.log("K");
    console.log("A");
    console.log("L");
}
//sayMyName();

// function addtwoNumbers(number1,number2)
// {
//     console.log(number1+number2)

// }


function addtwoNumbers(number1,number2)
{
    // let result=number1+number2
    // return result;
//console.log("rinkal");

return number1+number2
}

const result=addtwoNumbers(2,3)
//console.log("Result",result);
function loginUSerMessage(username="Sam")
{
    if(!username){
console.log("Please Enter USer Name");
return
}
    return`${username} just logged in`
}
//console.log(loginUSerMessage(""))//if dont pass value that is undefined

function calculateCsrtPArice(val1,val2,...num1)//rest (combined in array) and spreaf operator
{
return num1;
}
//console.log(calculateCsrtPArice(200,400,500));
//object pass in function
const user={
    username:"hitesh",
    price:199
}
function handleobject(anyoobject)
{
    console.log(`user name is${anyoobject.username} and price is${anyoobject.price}`);
}
//handleobject(user)
handleobject({
    username:"sam",
    price:399
})
//array pass in function
const MyNewArray=[100,400,100,600]
function returnsecondvalu(getarray)
{
    return getarray[1]
}
//console.log(returnsecondvalu(MyNewArray));

console.log(returnsecondvalu([200,400,500,100]));