//Global variables
let a = 2;
let b = 3;
let op = ''; 

//Initial operation functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return Math.round(a / b);
}

//Operate function which can use the initial operation functions
function operate(op) {
    return op
}

//Link the screen via a display variable
let display = document.querySelector('.screenText')
display.addEventListener('click', connected)

function connected() {
    display.textContent = this.textContent
}

//Links for the buttons
let one = document.querySelector('#one')
one.addEventListener('click', connected)

let two = document.querySelector('#two')
two.addEventListener('click', connected)

let three = document.querySelector('#three')
three.addEventListener('click', connected)

let four = document.querySelector('#four')
four.addEventListener('click', connected)

let five = document.querySelector('#five')
five.addEventListener('click', connected)

let six = document.querySelector('#six')
six.addEventListener('click', connected)

let seven = document.querySelector('#seven')
seven.addEventListener('click', connected)

let eight = document.querySelector('#eight')
eight.addEventListener('click', connected)

let nine = document.querySelector('#nine')
nine.addEventListener('click', connected)

let zero = document.querySelector('#zero')
zero.addEventListener('click', connected)

let period = document.querySelector('#period')
period.addEventListener('click', connected)

let equals = document.querySelector('#equals')
equals.addEventListener('click', connected)

let subtraction = document.querySelector('#subtraction')
subtraction.addEventListener('click', connected)

let addition = document.querySelector('#addition')
addition.addEventListener('click', connected)

let multiplication = document.querySelector('#multiplication')
multiplication.addEventListener('click', connected)

let modButton = document.querySelector('#modButton')
modButton.addEventListener('click', connected)

let division  = document.querySelector('#division')
division.addEventListener('click', connected)

let deleteButton = document.querySelector('#deleteButton')
deleteButton.addEventListener('click', deleteFunc)

let clearButton = document.querySelector('#clearButton')
clearButton.addEventListener('click', clearFunc)

// Delete and clear functions
function deleteFunc() {
    display.textContent = '';
    //This will need to be elaborated on when storing values in an array to pop off the last element.
}

function clearFunc() {
    display.textContent = '';
    //This will need to be elaborated on when storiing values in an array to empty the array.
}


console.log(operate(subtract(a,b)))

console.log(add(a, b))
console.log(subtract(a, b))
console.log(multiply(a, b))
console.log(divide(a, b))