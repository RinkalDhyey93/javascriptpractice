let myname="rinkal     "
let mychanel="chai       "
// console.log(myname.truelength);

let myheros=["thor","spiderman"]

let heropower={
    thor:"hamer",
    spiderman:"sling",

    getspiderpower:function(){
        console.log(`spidy power is${this.spiderman}`);
    }
}

Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`);
}


Array.prototype.heyhitesh=function(){
    console.log('hitesh say hello')
}
// heropower.hitesh();

myheros.hitesh()
myheros.heyhitesh()
// heropower.heyhitesh()


//inheritance
const USer={
    name:"chai",
    email:"chai@google.com"
}

const Teacher={
    makeVideo:true

}
const TeachingSupport={
    isAvailable:false
}

const TASuppor={
    makeAssigment:'js assigmnet',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=USer;

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="chaiaurCode      "
String.prototype.truelenth=function(){
    console.log(`${this}`)    
    console.log(`${this.name}`)
    console.log(`true length is${this.trim().length}`)

}
anotherUsername.truelenth();

"hitesh".truelenth()
"icetea".truelenth()
//scally draw for diagram


