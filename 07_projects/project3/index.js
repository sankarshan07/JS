const clock = document.querySelector("#clock")


//setIntervak takes two parameters one is funciton that returns,other is time interval in miliseconds

setInterval(function(){
    let date =new Date()    

   clock.innerHTML= date.toLocaleTimeString()
},1000)