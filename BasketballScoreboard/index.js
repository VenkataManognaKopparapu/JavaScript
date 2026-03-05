let homeScore= document.getElementById("home-score")
let guestScore= document.getElementById("guest-score")

let count=0
function increment1(){
    count=count+1
    homeScore.textContent=count
}
function increment2(){
    count=count+2
    homeScore.textContent=count
}
function increment3(){
    count=count+3
    homeScore.textContent=count
}

let homeEntry=document.getElementById("home-entry")
function saveh(){
     homeEntry.textContent += count + " - " 
     count=0
     homeScore.textContent=0
} 

let number=0
function guestinc1(){
    number=number+1
    guestScore.textContent=number
}
function guestinc2(){
    number+=2 
    guestScore.textContent=number
}
function guestinc3(){
    number=number+3
    guestScore.textContent=number
}

let guestEntry=document.getElementById("guest-entry")
function saveg(){
     guestEntry.textContent += number + " - " 
     number=0
     guestScore.textContent=0
} 
