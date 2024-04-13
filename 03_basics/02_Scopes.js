// let var const 
let a = 10 // local scope
const b = 20  //clouser  scope, block scope
var  c = 30  // global scope -through out the programm

if (true){
    let a =50;
    console.log("inside if ", a); 
}


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }



console.log(a);


// console.log(b);
// console.log(c);

//nested scope  /// clouser 
 function one() {
    const username = "sanky"
    function two(){
      const  website =  "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
 }

 one()



if (true) {
    const userna ="sanky"
    if (userna == "sanky") {
        const website =" facebook"
        console.log(`Hello ${userna}, your website is ${website}`);
    }
}

//*********IMPORTANT******* */
function addOne(num) {
    return num +1
}

console.log(addOne(5));

const addTwo =function (num) {
    return num + 2
}
console.log(addTwo(7));

console.log(typeof addTwo);