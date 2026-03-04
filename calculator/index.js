let num1 = 29
let num2 = 20

document.getElementById("num1-el").textContent = "Num1: "+ num1
document.getElementById("num2-el").textContent = "Num2: "+ num2

let sumEl = document.getElementById("sum-el")
function add() {
    let result = num1+num2
    sumEl.textContent = "Sum: " + result
}
function subract(){
    let result = num1 - num2
    sumEl.textContent = "sum: " + result
}
function multiply(){
    let result = num1 * num2
    sumEl.textContent = "Sum : " + result
}
function divide(){
    let result = num1 / num2
    sumEl.textContent = "Sum : " + result
}