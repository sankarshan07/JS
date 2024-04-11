//FUNCTIONs
function sayHello() {       //function definition
    console.log("hello");
}
// sayHello()   //function call

// function addTwo(number1,number2) {   //parameters
// console.log(number1+number2);
// }

sayHello()   //function call

function addTwo(number1,number2) {   //parameters
let result =number1+number2
return result
}
const result = addTwo(5,3)  //function call          Arguments
console.log(result);


// NOTE 
// IF WE ARE USING RETURN IN FUNCITON CALL WE NEED TO STORE THE FUNCTION CALL IN A VARIABLE