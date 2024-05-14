const form = document.querySelector('form')
form.addEventListener('submit',function(e){
e.preventDefault()
const height = parseInt(document.querySelector("#height").value)
const weight = parseInt(document.querySelector("#weight").value)


if(height==0 || height<0 ){
alert("Please enter a valid height")
}
else if(weight==0 || weight<0 ){
alert("Please enter a valid weight")
}
else{

document.querySelector("#results").innerHTML = "Your BMI is" + (weight / ((height*height)/10000)).toFixed(2)
}
})