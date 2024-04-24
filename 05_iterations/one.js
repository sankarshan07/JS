// //for 

for (let i = 0; i < 10; i++) {
    const element = i;   //block scope  variable, only accessible within the block
    console.log(element);
    if (element==5) {
        console.log("5 is the best number");
    }
    
}

console.log("nested loop");

 for (let i = 1; i <= 10; i++) {
console.log(`outer loop value ${i}`);
for (let j = 0; j <=10; j++) {
    // console.log(`inner loop value ${j}`);
    console.log(i+ "*"+ j + "="+(i*j));

    
}    
 }

 let myArray =["flash", "bang", "boom"];
 for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(`Element at index ${i} and element is ${element}`)
    
 }
// function add(a,b)
// {
// return a + b;
// }
// var result = add("2","3");
// console.log(result)


//break and continue 
for (let index = 0; index <=20; index++) {
    if (index==5) {
        break
    }
    console.log(`value  of index is ${index}`);

    
}
