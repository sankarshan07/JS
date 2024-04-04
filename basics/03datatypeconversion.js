//datatype conversion
let score = '25'
console.log(typeof score)//output: string

let valueInNumber =Number(score)  //converting  the variable score to number data type using Number() method N must be capital
console.log(typeof valueInNumber); 

//NaN- Not a number
let a = true
let b= false
console.log(typeof a);
console.log(typeof b);
let valueInNumberA =Number(a)
console.log(valueInNumberA);
let valueInNumberB =Number(b)
console.log(valueInNumberB);

let n = "sanky"
let nconvert = Number(n)
console.log(nconvert);   //NaN -not a number 

// "" is false  "name " is true


//number to boolean and booleam to number
let isloggedIn = 1
let loggedinB = Boolean(isloggedIn)  //Boolean B must be capital
console.log(loggedinB);
