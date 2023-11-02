//const tinderUSer=new Object()
const tinderUSer={}

tinderUSer.id="123abc"
tinderUSer.name="sammy"
tinderUSer.isloggedin=false;
//console.log(tinderUSer);

const regularUSer={
    email:"Some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"rinkal",
            lastname:"solanki"
        }

    }
}

//console.log(regularUSer.fullname.userfullname.firstname);//? use for if you dont know the chainig

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}

//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2,obj4)//empty create {} to copy all object data//target to source copy
const obj3={...obj1,...obj2}
//console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:1,
        email:"h@gmail.com"
    },

]
users[1].email

//console.log(tinderUSer);

//console.log(Object.keys(tinderUSer));
//console.log(Object.values(tinderUSer));
//console.log(Object.entries(tinderUSer));

//console.log(tinderUSer.hasOwnProperty('isloggedin'));

///destructring of object

const course={
    Coursename:"js hindi",
    price:"999",
    courseTeacher:"Rinkal"
}

//console.log(course.courseTeacher);
const{courseTeacher:Teacher}=course

//console.log(courseTeacher)
console.log(Teacher)

//api => apna kam kisi or ke sir pe dalna
//json=>java script object method

// {
// "name":"hitesh",
// "coursename":"js in hindi",
// "price":"free"
// }

[
    {},
    {},
    {}
]
