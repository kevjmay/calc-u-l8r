//Global variables
let a = 0;
let b = 0;
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

    if (a === 0) {
        a = this.textContent
        console.log(`a is now set to ${a}`)
    } else if (b === 0) {
        b = this.textContent
        console.log(`b is now set to ${b}`)
    } else if (a != 0 && b != 0) {
        a = 0
        b = 0
        console.log(`variables reset to start new calculation`)
    }
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
    if (a != 0 && b != 0) {
        b = 0
        console.log(`b is now: ${b}`)
    } else {
        a = 0
        console.log(`a is now: ${a}`)
    }
}

function clearFunc() {
    display.textContent = '';
    a = 0
    b = 0
    answer = 0
    console.log(`now cleared, a: ${a}, b: ${b}, and answer: ${answer}`)
}
