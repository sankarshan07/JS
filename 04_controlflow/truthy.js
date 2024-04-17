const userEmail =[]    //empty arry gives true  bt  empyt array doesnt give truthy values

if (userEmail) {
    console.log("got user email");
}
else{
    console.log("dont have email");
}


// falsy values 
// false , 0 ,null ,-0, BigInt 0n , undefined , "" , NaN

// truthy values
//"0","false"  ,"\t", "\n",  \r, " ",[],{},funtion() {}


if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {   //keys() takes parameter of object
    console.log("Object is empty");
}

// nuslish coalescing opertor (??):null undefined
 let val1;
 val1 =5 ?? 10  //5
 val1 =null ?? 10   //10
 val1 = undefined?? 15


// terinary operator 
// condition ? true : false
const percentage =9
percentage >=60 ? console.log("pass") : console.log("fail");