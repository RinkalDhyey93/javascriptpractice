//string and its function
const name="hitesh";
const repocount=50

//console.log(name+repocount+"value");//not use

//console.log(`hello my name is ${name} and my repo count is ${repocount}`); 

const gameName=new String('hitesh-hc-com');//key value pairs like 0=h 
//refer string method in mdn
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4);
console.log(newString);
const anotherString=gameName.slice(-8,4);
console.log(anotherString);

const newstrin1="   hitesh  ";
console.log(newstrin1);
console.log(newstrin1.trim());
const url="https://hitesh.com/hitesh%20chaudhry";
console.log(url.replace('%20','-'));
console.log(url.includes('hiteshruru'));
console.log(gameName.split('-'));//string splite in array by - or splace also