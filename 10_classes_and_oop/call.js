function SetUsername(username){
    //complex db calls
    this.username=username;
    console.log("called")
}

function CreareUser(username,email,password){
    SetUsername.call(this,username);

    this.email=email;
    this.password=password;
}

const chai=new CreareUser("Chai","chai@fb.com","124")

console.log(chai);