//datatypes 
//primitive and non primitive 
//primitive :String ,Number ,Boolean , null ,undefiend ,Symbol,BigInt

//reference type or non primitive 
// Array ,Objects ,Functions,

const score = 100
//javascript is dynamically typed language .it doesnt require to mention datatype while declaring  a variable.
const id = Symbol('123')
const anotherID =Symbol("123")
console.log(id == anotherID);

//non primitive  data types
const heros = ["shaktiman", "batman","spider man"]  //array  is a reference type

//object
let obj ={
    nam: "Shakti Man" ,
    age : 25 ,  
    power: 'Time manipulation'
}

//functions
 const myfucn = function(){
    console.log("Hello World");

}

//tip : if we find out what is the dataytpe of null it gives us object.
console.log(typeof null );  //Object
