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




//wwen we have more then one value  to pass  we use REST  operator  we use it beofre parameter indicating
// that we have many parameters to pass and it will be considered as array

function calculateCartPrice(...num1){   //REST operator
    return num1
}
console.log(calculateCartPrice(40,500,600));  //will be bundled in array


//handleing  objects in funciton
const userobj ={
    userName : "john",
    price :199

}
function handleObj(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);


}
handleObj(userobj)



// handling array in funciton
const myNewArray = [200,400,600,4665]
function hadnleArr (getArray){
return  getArray[1]
}


console.log(hadnleArr(myNewArray)) ;