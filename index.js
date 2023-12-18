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

console.log(operate(subtract(a,b)))

console.log(add(a, b))
console.log(subtract(a, b))
console.log(multiply(a, b))
console.log(divide(a, b))