//define in two way of object leteral and constructor
//singleton only one= constructor though
//multiple mant instace = literall
//Object.create ==singleton
const mysum=Symbol("key1");
const jsuser={
    name:"hitesh",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isloggedin:false,
    lastlogginDays:["monday","saturday"],
    "fullname":"Rinkal Solanki",
    [mysum]:"mykey1"
}

 
//console.log(jsuser.email);
//console.log(jsuser["email"]);
//console.log(jsuser.fullname);

//symbol
//console.log(typeof jsuser.mysum)

jsuser.email="rinkal@chatgpt.com";
//Object.freeze(jsuser)
jsuser.email="dhyey@gmail.com"
//console.log(jsuser);

//function
jsuser.greeting=function()
{
    console.log("Hello js User");
}
jsuser.greetingtwo=function()
{
    console.log(`Hello js User,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());