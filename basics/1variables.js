const accountId =12354   //cannot be changed
let accountEmail ="sankarshandesai3100@gmail.com"
var accountPassword ="12345"
accountCity = "banglore"

let accountState ;  //variable is undefined

/*
prefer not to use var 
beacuse of issure in block scope and fucntional scope
*/

console.log(accountId);
accountEmail =  'sankars96@gmail.com'
console.log(accountEmail);
console.table([accountEmail,accountId,accountCity,accountPassword,accountState])