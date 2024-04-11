// const user = new Object()
const user = {

}
user.id ="125sae"
user.name ="sam"
user.isloggedin =false
console.log(user);

const user1 = {
    email : "something@gmail.com",
    fullname :{
        firstname : "harman",
        secondname :"kumar",
        thirdname : "chaturvedi"
    }
    
}
console.log(user1.fullname);


const obj1 = {
    1:"2",
    2:"b"
}
const obj2 = {
    3 :"c",
    4 :"d"
}

const obj3 = {...obj1,...obj2}   //spread operator used to combine 

console.log(obj3);

const target = {
    a:1, b:2 , c:3
}

const source ={
    d:4, e:5, f:6
}
const source3 ={
    d:42, e:57, f:61
}
//object.assign()  is used to merge two  objects into one object
const newobj = Object.assign(target,source)
console.log(newobj);
console.log(target); 

// if we have more thn 2 sources to be combined thn we use 
const newobj1 = Object.assign({},target,source,source3)

// when values come from database
// array of users (here its is collectioln of different objects)
const users =[
    {id:1, name:"John"},
    {id:2, name:"Sara"},

]
// accessing
console.log(users[0].name);


// to acces the keys and values from the objects
console.log(Object.keys(target)); //will be returned in array
console.log(Object.values(target));  //wil be returned in array
console.log(Object.entries(target)) ; // will return an array of arrays [key,value]