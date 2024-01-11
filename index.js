const hours = document.getElementById("hour")
const minute = document.getElementById("min")
const seconds = document.getElementById("sec")


window.addEventListener("DOMContentLoaded", function(){
   setInterval(() => {
    let hour = new Date().getHours()
    let min  = new Date().getMinutes()
    let sec = new Date().getSeconds()

    hours.innerHTML = hour
    
    minute.innerHTML = min
    
    seconds.innerHTML = sec
   }, 1000);
  
})

 

