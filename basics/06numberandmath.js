//numbers data type and math
const score = 4005
console.log(typeof score);
const balance = new Number(1234)   //number as an object
console.log(typeof balance);
console.log(balance);
console.log(score);

// methods available
console.log(balance.toString());     //converts number to string

console.log(score.toFixed(2));    //rounds the number with two decimal places
//toPrecision () method is used when we want a precise value of a floating-point number.
const hundreds = 1000000
console.log(hundreds.toLocaleString());     // adds commas 1,000,000



// **********************MATH LIBRARY ********************************
console.log(Math);
console.log(Math.random());
