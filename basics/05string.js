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