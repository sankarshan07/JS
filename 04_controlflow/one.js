//if
if (true) {
    console.log("executed");
}
else {
    console.log("not executed");
}

const temperature =410
if (temperature <50 ){
    console.log("its hot day");
}
else{

    console.log("temperature is >50");
}
console.log("outside the control flow");

// scope related
const score  = 200 
if (score >100){
    const power = "fly"
    console.log(`user power  ${power}`);
}

//short hand notation
// if(balance>500) console.log( 'you are rich');    //implict


// Nesting

const balance =1000

if (balance < 500) {
        console.log("less than 500");
    } else if (balance < 750) {
        console.log("less than 750");
        
    } else if (balance < 900) {
        console.log("less than 750");
        
    } else {
        console.log("less than 1200");
    
    }


    const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}