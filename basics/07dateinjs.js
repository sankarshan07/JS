//date objects represent a single moment in time in a platform independent format. 

let mydate = new Date() 
console.log(mydate.toString()); //returns the date and time as a string,
console.log(mydate.toDateString()); //returns only date
console.log(mydate.getTime());
console.log(Date());

console.log(mydate.toJSON());