//var c=300;

let a=300; //globle scope
if (true) {
    let a=10 //only for scope
const b=20//fix value
//var c=30 not to use
//console.log(a);//local scope
}
// console.log(a);
//console.log(b);
//console.log(c);


//nested scope 

function one()
{
    const UserName="Rinkal"
    function two()
    {
const Wensite="youtube"
console.log(UserName);
    }
    // console.log(Wensite);
    two();
}
//one();

if(true)
{
    const UserName="Rinkal"
    if(UserName==="Rinkal")
    {
        const website="youtube"
     //   console.log(UserName + website);
    }
    // console.log(website);
}
// console.log(UserName);

//&&&&&&&&Interesting$$$$$$
console.log(addone(5));
function addone(num) //only function
{
    return num+1;
}
const addtwo=function(num)//as a variable function
{
    return num=2;
}
addtwo(5);
