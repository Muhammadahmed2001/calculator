


let ac = document.getElementById("AC")
let del = document.getElementById("DEL")
let percentage = document.getElementById("%")
let divide = document.getElementById("/")
let multiply = document.getElementById("*")
let addition = document.getElementById("+")
let subtraction = document.getElementById("-")
let display = document.getElementById("display")



function number(num){
    display.value += num
}
function operator(sign){
 display.value += sign.value   

}
