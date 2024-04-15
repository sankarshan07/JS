//date objects represent a single moment in time in a platform independent format. 

let mydate = new Date() 
console.log(mydate.toString()); //returns the date and time as a string,
console.log(mydate.toDateString()); //returns only date
console.log(mydate.getTime());
console.log(Date());

console.log(mydate.toJSON());
console.log(typeof mydate);

let mycreateddate =new Date(2023,0,2)   //month starts with 0  for January 
console.log(mycreateddate.toString());
//time stamp 
let mytimestamp =Date()
console.log(Math.floor(Date.now()/1000));

//string interpolation
console.log(`The current year is ${mytimestamp.toString()}`);
