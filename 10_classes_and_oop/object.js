// everything is object in javascript
function multipleby5(num){
    this.num=num;
    return num*5;
}

multipleby5.power=2;

console.log(multipleby5(5));
console.log(multipleby5.power);
console.log(multipleby5.prototype);//by default context set 


function createUSer(username,score){
    this.username=username;
    this.score=score;
}

createUSer.prototype.increment=function(){
    this.score++;
}

createUSer.prototype.printme=function(){
    console.log(`price is${this.score}`)
}

const chai=new createUSer("chai",25)
const tea=createUSer("tea",250)

chai.printme();

/*
here's what happens behind the scenece when the new keyword is used:

-A new object is created: the new keyword intiates the creation of a new javascript object.

-A prototype is linked: the newly created object gets linked to the prototype property of the constructor function.this means that it has access to properites and method defined on the constructor's prototype.
 
- the constructor is called: the constructor function is called with specified arguments and this is bound to the newly created object.if no explicit return value is specified from the constructor,javascript assume this,the newly created object,to the intended return value.

- the new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value(object,array,function,etc.),the newly created object is returned.

*/