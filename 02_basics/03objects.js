// OBJECTS
// objects can be created by 2 types one is by constructor and the other as literal 
// singleton -constuctor
// literal -multiple instance 


//literals
const user ={
    name : "John",
    age:30,
    isloggedin :false,
    location :"banglore"

}
//accesing  properties of object using dot notation
console.log(user.name);
// accessing  property using bracket notation
console.log(user["age"]);   //better to practice this  method

//symbol datatype

const mysym =Symbol("key")  //declatrion of symbol

// to add Symbol in Object  
const user2 ={
    name : "John",
    age:30,
    [mysym] : "value",   //for using Symbol in object we have to  use brackets [] 
    isloggedin :false,
    location :"banglore"

}
console.log(user2[mysym]);
console.log(user2["name"]);

// user2.name="Mike";
console.log(user2) ;

// we can not allow changes in object  by freezing them 
// Object.freeze(user2);   // we cannot propogate any changes after this
user2.greeting = function (){   
    console.log(`hello ${this.name}`)
}
console.log(user2.greeting())

user2.greetingTwo = function(){
    console.log(`hello this is me ${this.name} and this is my age ${this.age}`)
}
console.log(user2.greetingTwo());