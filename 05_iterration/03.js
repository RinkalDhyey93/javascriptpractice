//for off loop
// [""],[""],[""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const num of arr) {
    //console.log(num);
}

const greetings="hello World"

for (const greet of greetings) {
    if(greet==" ")
    continue;
   // console.log(`each char is ${greet}`);
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('USP',"united state of america")
map.set('FR',"france")

//console.log(map);

for (const [key,value] of map) {
//console.log(key,':=',value);    
}

const myObject={
    Game1:'NFS',
    Game2:'spiderman'
}

for (const [key,value] of myObject) {
   // console.log(key,':=',value);
}