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


// ****************operations*********************

let value = 3
let negvalue = -value
console.log(negvalue);
console.log(2+2);
let st1 = "sankarshan"
let st2 ="Desai"
let str3 = st1 + st2
console.log(str3)

console.log("1"+2);   //12 op
console.log("1"+"2");
let num1, num2, num3
num1=num2=num3 =5;