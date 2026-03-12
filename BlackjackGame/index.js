let firstCard = 2
let secondCard = 6
let cards = [ firstCard , secondCard]
let sum = firstCard +  secondCard
let hasBlackjack = false
let isAlive = true
let message = " "

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl= document.querySelector("#card-el")
  
function startGame(){
    cardEl.textContent = "Cards : " + " " + cards[0] + " " + card[1]
    sumEl.textContent = "sum : " + sum
     if (sum <= 20){
    message = "Do you want to draw a other new card?"
    } else if ( sum === 21){
        message = " Wohoo! You've got Black jack"
        hasBlackjack = true
    } else {
        message = " You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
} 

function newcard(){
    let card = 11
    sum = sum + card
    startGame()
}  
