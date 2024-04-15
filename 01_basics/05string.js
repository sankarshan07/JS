//string in javascript 
const nam  ="sankarshan "
const repocount = 4
// console.log(nam +repocount + "value "); outdatted

//string interpolation 
console.log(`hello my name is ${nam.toUpperCase()} and my repo count is ${repocount}`);  //backticks with ${} to acces the variable


//string declartion with new  keyword and constructor  here string is an object
const gamename = new String('fortnite');
console.log(typeof gamename);  //this i object not a string as it is  created using the new keyword and string constructor
let gamename2 = "fornite2"
console.log(typeof (gamename2));  //string 
const gamename3 = new String("FortNite");
console.log(gamename3[0]);
console.log(gamename3[4]);
// string methods
console.log(gamename2.length); // gives the lenght of the string
console.log(gamename2.toUpperCase());
console.log(gamename2.charAt(1));  //takes input index returns the  character at that position
console.log(gamename2);
// string methods doesnt change the origin value   of a variable even after applyinh methods

// string slicing
const str = gamename.substring(0,4) // it takes two parameters  startindex and end  it doesnt take negative indexing
console.log(str);

const str4 = gamename.substring(-4,5)  // it includes negative slicing 
console.log(str4);
const newString1 = "     sankarshan     "
console.log(newString1.trim()) ;    // removes white spaces from both sides 
//replace
const url = "https://sankarshan.com"
console.log(url.replace(".com",".net"));  //replaces  .com to .net 
//checking if a string contains another string
console.log("hello world".includes("world")) ;
//split method  
const arr= ["apple","banana","cherry"];
console.log(arr.join(","));  //joins all elements of array with comma

