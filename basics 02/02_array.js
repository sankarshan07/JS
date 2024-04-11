const MarvelHeros =["thor","ironman", "spiderman"];
const DcHeros =["superman", "batman", "wonder woman"]
// MarvelHeros.push(DcHeros)
console.log(MarvelHeros);
//if we push array into another array it doesnt merge the array rather it would add array within the array
console.log("the third element is ",MarvelHeros[3]);
//to access elements of an array inside another array

// console.log(MarvelHeros[3][1]);  //accesing the element of the array within the array


const combine =MarvelHeros.concat(DcHeros)
console.log(combine);
//using concat method to combine two arrays 
//concat returns new array thats must be stored in a new variable

// SPREAD operator
const newhero =[...MarvelHeros, ...DcHeros]  // this makes all the elements in both the arrays are spread out thus make all elements individual
console.log(newhero);

const anotherArr = [1,2,3,[4,5,6],7,[4,5]]
const usuableArr =anotherArr.flat() //returns all the elements in one array itself
console.log(usuableArr);

console.log(Array.isArray("sankarshan"));
// we can conveert this above into array by using from 
console.log(Array.from("sankarshan"));  //each letter will be considered as element of the array

console.log(Array.from({name : "sankarsham"}));  // interesting we have to metntion which must be made into array keys or values

let score =100
let score2 =200
let score3 =300 
console.log(Array.of(score,score2,score3));   


let name = "sankarshan"
let name2 = "helo"
let name3= "World"
console.log(Array.of(name,name2,name3));

