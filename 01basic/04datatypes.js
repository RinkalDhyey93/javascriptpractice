//ECMA Script =>standard of javascript
//"use strict"; //treat all js code as newer version
//alert("hello") we are using nodes, not browser
//console.log(3
 //   +3)//code readability should be high
//console.log("hitesh")
let name="Rinkal"
let age=30
let isLogedIn=false
//number=>2 to power of 53
//bigint
//String =>""
//boolean =>true/false
//null=>standalone value //is a object
//undefined=> is a unique value undefined type
//symbol=>unique
//object
//console.log(typeof"hitesh");

//# primitive (call by value)
//7 types:String,number,boolean,null,undefined,symbol(make value uniqe),BigInt(123213123n last n in number)
const id=Symbol('123');
const anotherId=Symbol('123');
//console.log(id===anotherId);



//#REference (non-primitive)
//Array,objects,functions // all typeof is object  
const heros=["saktiman","naagraj","doga"];
let myobj=
{
    name:"hitesh",
    age:30,
}

const myFunction=function (){
  //  console.log("hello world");
}
//console.log(typeof myFunction);

//***************memory concept ************** */
//stack(primitive)work on copy(callbyvalue), heap(non-primitive) original(call by reference)
let myYoutubeName="hiteshchaudhary";
let anotherName=myYoutubeName;
anotherName="chaiorcode";

console.log(myYoutubeName);
console.log(anotherName);

let user={
    emial:"user@gogle.com",
    upi:"user@bl"
}
let usertwo=user;
usertwo.emial="rinkal@gmail.com";

console.log(user.emial);
console.log(usertwo.emial);