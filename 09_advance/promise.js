const promisone=new Promise(function(resolve,reject){
    //do an asnc task
    //DB calls,cryptoghapht,network

    setTimeout(function(){
        console.log('async task is compleme');
        resolve();
    },1000)

})

promisone.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task two");
        resolve()
    },1000)
}).then(function(){
    console.log("async two resolved");
})


const promisethree=new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
promisethree.then(function(user){
console.log(user)
})


const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error)
        {
            resolve({username:"hitesh",password:"123"})
        }
        else
        {
            reject('Error:something went wrong')
        }
    },1000)
})

promisefour.then((user)=>{
  console.log(user);
  return user.username;  
}).then(function(username){
console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("The promise is either resolved or rejected")
})


const promisefive=new Promise((resolve,reject)=>{
    setTimeout(function(){
        let error=true;
        if(!error)
        {
            resolve({username:"javascript",password:"123"})
        }
        else
        {
            reject('Error:js went wrong')
        }
    },1000)
});

async function consumeProimseFive(){
try{
    const response=await promisefive;
console.log(response)
}
catch(error)
{
    console.log(error)
}
}

consumeProimseFive();


// async function getallusers()
// {
//    try
//    {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//    const data=await response.json()
//    console.log(data);
//    }catch(error)
//    {
//     console.log("E:",error)
//    }
// }
// getallusers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{console.log(data);console.log(data.followers)})
.catch((error)=>console.log(error))
