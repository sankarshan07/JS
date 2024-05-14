const button = document.querySelectorAll(".button")
// console.log(button);
const body = document.querySelector("body")


button.forEach(function(button){
    button.addEventListener("click", function(e){
        
        if (e.target.id == 'grey') {
            body.style.backgroundColor = e.target.id
        }
         if (e.target.id == 'white') {
            body.style.backgroundColor = "white"
        }
        if (e.target.id == 'blue') {
            body.style.backgroundColor = "blue"
        }
        if (e.target.id == 'yellow') {
            body.style.backgroundColor = "yellow"
        }

    })
})