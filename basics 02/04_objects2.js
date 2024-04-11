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
