//temporal.function

let myDate=new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
//0 is starting
//let mycreatedDate=new Date(2023,0,23,5,3);
let mycreatedDate=new Date ("1-14-2023");
//console.log(mycreatedDate.toLocaleString());
let myTimeStamp=Date.now();

//console.log(myTimeStamp);
//console.log(mycreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"    
})