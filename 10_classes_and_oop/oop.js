const user={
username:"rinkal",
logincount:8,
signedin:true,
getuserdetails:function(){
// console.log("Got user data");
// console.log(`username:=${this.username}`)
console.log(this);
}
}

//console.log(user.username);
// console.log(user.getuserdetails());
//console.log(this)

// const promiseOne=new Promise()
// const date=new Date();


function User(username,logincount,isloggedin){

    this.username=username;
    this.isloggedin=isloggedin;
    this.logincount=logincount;

    this.greeting=function(){
        console.log(`welcome ${this.username}`)
    }
    return this;

}

const userone=new User("hitesh",12,true)//constructor function create 
const usertwo=new User("chai or code",11,false)
console.log(userone.constructor);
console.log(userone instanceof User)
// console.log(usertwo);
//instance of method read in mdn


