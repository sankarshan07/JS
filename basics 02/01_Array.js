//Arrays 
const myArr =[0,1,2,3,4,5]
//arrays are mutuable ,resizble

// accesing the elements 
console.log(myArr[0]);
// declaration of array 
const heros = new Array(1,2,3,4)
console.log(heros);
// console.log(typeof heros);
const numbers = [1,2,3,4,5]
console.log(numbers.length);  //length doesnt have brackets for it.

// array methods
myArr.push(6);   //add element to end
console.log(myArr);
myArr.pop();    //remove last
console.log(myArr);
myArr.shift()   //removes first element and shift the other one by one
console.log(myArr);
myArr.unshift(0) //add an elemnt at the beginning
console.log(myArr);
let fruits=['apple','banana','cherry']
console.log(fruits.includes('mango'));

console.log(fruits.indexOf('banana')) ;

const arr2 = [9,8,7,6,5];
console.log(arr2.join('-'));     //joins

//slice and splice
console.log(arr2.slice(1,3));     

console.log(arr2.splice(1,3));  







//methods of the array
// shift() removes first Element and shift the other values one by  one
// unshift() adds element at first and moves other to right one by one
//push() adds element at the last
// pop() removes last element
//includes() check whether the element is presnt in the array  returns the boolean  value
//indexOf()  returns the index of the element if the element is not in the array it returns  -1
// join()  joins all the elements in a string 
//slice()  it returns the elements mentioned in the parameters bt it doesnt it inlucde end  parameter
// splice() it changes the original array it does include end parameter element
