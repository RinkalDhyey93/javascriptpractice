const marvel_heros=["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]
//marvel_heros.push(dc);
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allheros=marvel_heros.concat(dc)
// console.log(allheros);

//const all_new_heros=[...marvel_heros,...dc]//spread is ...(alag karvu)
//console.log(all_new_heros);

// const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array=another_array.flat(Infinity)//array of array are in one array  element
// console.log(real_another_array);


///&&&& is,of,from


console.log(Array.isArray("hitesh"));//check wether it is array

console.log(Array.from("hitesh"));// from= convert string to array
console.log(Array.from({name:"hitesh"})); //intersting

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1,score2,score3));//variable convert in to array
