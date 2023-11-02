//falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truth values
//"0",'false'," ",[],{},function(){},

const UserEmail=[]
if(UserEmail)
{
    console.log("Got user Email");
}
else
{
    console.log("Don't have user Email");
}
if(UserEmail.length===0)
{
    console.log("Array is Empty");
}

const emptyobj={}
if(Object.keys(emptyobj).length===0)
{
console.log("object is empty");
}
//false==0,false=='',0==''
