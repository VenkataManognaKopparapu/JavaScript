// Create 2 variables, first and last name 
//concatenate the two variables into a third variable called full name 
// log full name at console 

let firstName = " Manu "
let secondName = " Kopparapu"
let fullName = firstName + " " +secondName
console.log (fullName)


//create a function that logs out " Hi there, Manu!" when called 

let name = " Manu "
let greeting = " Hi There"

function greetManu(){
    console.log( greeting + " ," + " " + name + " !" )
}
greetManu()


// Incrementing and Decrementing 
//Create 2 functions, add 3 points() and remove 1 point(), and have them add/remove points to/from the my points variable 
//Call the functions to that the line below logs out 10 

let myPoints = 3
function add3Points(){
    myPoints +=3 
}
myPoints()
function remove1Point(){ 
    myPoints -=1 
}
add3Points()
add3Points()
add3Points()
remove1Point()
remove1Point()


//Strings and Numbers
//Predicting Output
console.log("2" + 2)// "22"
console.log(11 + 7) // 18
console.log(6 + "5")// "65"
console.log( "My points: " + 5 + 9)//" My points: 59"
console.log(2+2)//4
console.log("11" + " 14")//1114


// Rendering an error message 
//When the user clicks the purchase button, render out "something went wrong, please try again" in the paragarph that has the id="error"
//Solved challege look at index.html, index.js, styles.css


//Caculator Challenge 
//Create four functions add(), subract(), divide(), multiply()
//call the correct function when user clicks on one of the button 
//perform the given caculation using num1 and num2
//render the result of the cacuation in the paragaph with id=''
//E.g. if the user clicks on the " Plus" button, you should render 
// "sum: 10" since (8 + 2 = 10) in side3 the paragraph with is="sum-el"

// check if the person is eligible for a birthday card from the king! (if age is more than 100 the are qualified to get a card)
//if less than 100 - " Not Eligible"
//else if exactly 100 - "Here is your birthday card from the king!"
//else - "Not Eligible, you have a already gotten one"
let age = 100 
if ( age < 100){
    console.log( "Not Eligible")
} else if ( age === 100){
    console.log ( "Here is your birthday card from the king!" )
} else {
    console.log ( "Not Elegible,you have already gotten one")
}


//Boolean
console.log (4===3)//false
console.log (5>2)//true
console.log(12 > 12) // false
console.log ( 3 < 0) //false
console .log( 3>=3)//true
console .log( 11<=11) //true
console .log( 3 <=2 )//false
