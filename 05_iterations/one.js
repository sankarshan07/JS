//for 

for (let i = 0; i < 10; i++) {
    const element = i;   //block scope  variable, only accessible within the block
    console.log(element);
    if (element==5) {
        console.log("5 is the best number");
    }
    
}

console.log("nested loop");

 for (let i = 0; i < 10; i++) {
console.log(`outer loop value ${i}`);
for (let j = 0; j < 10; j++) {
    // console.log(`inner loop value ${j}`);
    console.log(i+ "*"+ j + "="+(i*j));
    
    
}    
 }