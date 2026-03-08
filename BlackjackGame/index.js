let firstCard = 2
let secondCard = 6
let sum = firstCard +  secondCard
let hasBlackjack = false
let isAlive = true

if (sum <= 20){
   console.log("Do you want to draw a other new card?")
} else if ( sum === 21){
    console.log (" Wohoo! You've got Black jack")
    hasBlackjack = true
} else {
    console.log (" You're out of the game! ")
    isAlive = false
}