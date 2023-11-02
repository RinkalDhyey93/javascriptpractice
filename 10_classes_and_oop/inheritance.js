class USer{
    constructor(username)
    {
        this.username=username;
    }
    logme(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends USer{
    constructor(username,email,password)
    {
        super(username)
        this.email=email;
        this.password=password;
    }

    AddCourse(){
        console.log(`A new course was added by${this.username}`);
    }
}

const chai=new Teacher("chai","chai@teacher.com","123");
chai.logme();

const tea=new USer("rinkal");

tea.logme();

console.log(chai===tea);
console.log(chai instanceof USer);

