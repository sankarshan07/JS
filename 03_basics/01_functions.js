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
// IF WE ARE USING RETURN IN FUNCITON CALL WE NEED TO STORE ..
// ..THE FUNCTION CALL IN A VARIABLE OR CAN USE IN CONSOLE.LOG
// dont wrtite anything after  return it will not execute the code below that line

function loginUserMessage(userName){
    if (userName === undefined){
    console.log("please enter user name");
    return
    }
    else
    return  `Welcome ${userName} you are just logged in`
}
console.log(loginUserMessage("john doe"));
    