const user ={
    username : "john",
    price : 699,
    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website`);  //this key word tells about the current contex t 
    }
}

user.welcomeMessage()

// console.log(user["username"]); // accesing same as user.username

user.username ="mike"
user.welcomeMessage()
// in node environment if we print THIS in log , this keywrord represents empty object


// *********************************************************************************************************
//  arrow function 
 function coffe (){
    let username  = "john doe"
    // console.log(this.username);   //can not be used this  here because it is a normal function so this will refer to the window object
 }
//  coffe();



// differeence between arrow fn and fn






// arrow function syntax


const addTwo =(n1,n2) => {
return  n1 + n2;
}
console.log(addTwo(3,4))

console.log("------------------------")



// implicit arrow funciton syntax

const addTwoagain =(n1,n2)=> (n1+n2);  //wrttn in one line withou braces and without  return keyword
// if we use curly braces we have to use return keywwrpd also

console.log(addTwoagain(5,6));




const  coffee2  =() =>{
    let username = "sam"
    console.log(username);
}

coffee2()

