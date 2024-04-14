//immediately invoked function expression -IIFE
// immediate executiion of function 


//iife syntax
(function demo () {
    console.log("mongo db connecteed");  //named iife
})() ;    //semi colon is compulsory  
 //immediately calling the funciton  by adding funciton in bracketes and at the end adding simpke brakets

// denfiton of IIFE is  to execute some code immediately without needing to be called explicitly. It can also contain a private variable

(function demo2 () {
    console.log("mongo db connecteed2");  //named iife
})();   //semi colon is compulsory  

( (n1,n2) => {
    console.log(n1+n2);
} ) (5,6);   //semi colon is compulsory  