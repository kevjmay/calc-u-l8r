 // Global variables updated by event handlers

 let a = 0
 let b = 0
 let op = ''
 let equation = []
 let error = 'Hhhmmm oops! Try that again'

 // button links to equation and set global variables a, b

 let one = document.querySelector('.one')
 one.addEventListener('click', function() {
     document.querySelector('.screen').textContent = one.textContent
     document.querySelector('.arrayScreen').textContent = equation
     
     if (a === 0) {
         a = one.textContent
         equation.push(a)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     } else if (b === 0) {
         b = one.textContent
         equation.push(b)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     }
 })

 let two = document.querySelector('.two')
 two.addEventListener('click', function() {
     document.querySelector('.screen').textContent = two.textContent
     document.querySelector('.arrayScreen').textContent = equation
     
     if (a === 0) {
         a = two.textContent
         equation.push(a)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     } else if (b === 0) {
         b = two.textContent
         equation.push(b)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     }
 })

 let three = document.querySelector('.three')
 three.addEventListener('click', function() {
     document.querySelector('.screen').textContent = three.textContent
     document.querySelector('.arrayScreen').textContent = equation
     
     if (a === 0) {
         a = three.textContent
         equation.push(a)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     } else if (b === 0) {
         b = three.textContent
         equation.push(b)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     }
 })

 let four = document.querySelector('.four')
 four.addEventListener('click', function() {
     document.querySelector('.screen').textContent = four.textContent
     document.querySelector('.arrayScreen').textContent = equation

     if (a === 0) {
         a = four.textContent
         equation.push(a)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     } else if (b === 0) {
         b = four.textContent
         equation.push(b)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     }
 })

 let five = document.querySelector('.five')
 five.addEventListener('click', function() {
     document.querySelector('.screen').textContent = five.textContent
     document.querySelector('.arrayScreen').textContent = equation

     if (a === 0) {
         a = five.textContent
         equation.push(a)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     } else if (b === 0) {
         b = five.textContent
         equation.push(b)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     }
 })

 let six = document.querySelector('.six')
 six.addEventListener('click', function() {
     document.querySelector('.screen').textContent = six.textContent
     document.querySelector('.arrayScreen').textContent = equation

     if (a === 0) {
         a = six.textContent
         equation.push(a)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     } else if (b === 0) {
         b = six.textContent
         equation.push(b)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     }
 })

 let seven = document.querySelector('.seven')
 seven.addEventListener('click', function() {
     document.querySelector('.screen').textContent = seven.textContent
     document.querySelector('.arrayScreen').textContent = equation

     if (a === 0) {
         a = seven.textContent
         equation.push(a)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     } else if (b === 0) {
         b = seven.textContent
         equation.push(b)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     }
 })

 let eight = document.querySelector('.eight')
 eight.addEventListener('click', function() {
     document.querySelector('.screen').textContent = eight.textContent
     document.querySelector('.arrayScreen').textContent = equation

     if (a === 0) {
         a = eight.textContent
         equation.push(a)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     } else if (b === 0) {
         b = eight.textContent
         equation.push(b)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     }
 })

 let nine = document.querySelector('.nine')
 nine.addEventListener('click', function() {
     document.querySelector('.screen').textContent = nine.textContent
     document.querySelector('.arrayScreen').textContent = equation

     if (a === 0) {
         a = nine.textContent
         equation.push(a)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     } else if (b === 0) {
         b = nine.textContent
         equation.push(b)
         document.querySelector('.arrayScreen').textContent = equation.join(' ')
         console.log(equation)
     }
 })

 //operation links to equation and update op global variable
 let add = document.querySelector('.addition')
 add.addEventListener('click', function() {
     document.querySelector('.screen').textContent = add.textContent
     document.querySelector('.arrayScreen').textContent = equation

     op = add.textContent
     equation.push(op)
     document.querySelector('.arrayScreen').textContent = equation.join(' ')
     console.log(equation)

 })

 let subtract = document.querySelector('.subtract')
 subtract.addEventListener('click', function() {
     document.querySelector('.screen').textContent = subtract.textContent
     document.querySelector('.arrayScreen').textContent = equation

     op = subtract.textContent
     equation.push(op)
     document.querySelector('.arrayScreen').textContent = equation.join(' ')
     console.log(equation)

 })

 let multiply = document.querySelector('.multiply')
 multiply.addEventListener('click', function() {
     document.querySelector('.screen').textContent = multiply.textContent
     document.querySelector('.arrayScreen').textContent = equation

     op = multiply.textContent
     equation.push(op)
     document.querySelector('.arrayScreen').textContent = equation.join(' ')
     console.log(equation)

 })

 let division = document.querySelector('.division')
 division.addEventListener('click', function() {
     document.querySelector('.screen').textContent = division.textContent
     document.querySelector('.arrayScreen').textContent = equation

     op = division.textContent
     equation.push(op)
     document.querySelector('.arrayScreen').textContent = equation.join(' ')
     console.log(equation)

 })

 // The operate function - based on global variables op it will decide which operation to run with variables a, b
 let equals = document.querySelector('.equals')
 equals.addEventListener('click', function() {
     
     // Extract the values from the equation array
     let first = Number(equation[0]);
     let operation = equation[1];
     let second = Number(equation[2]);

     // Perform the addition based on the operation
     let result;
     if (operation === '+') {
         result = first + second;
     } else if (operation === '-') {
         result = first - second;
     } else if (operation === '*') {
        result = first * second;
     } else if (operation === '/') {
        result = Math.round(first / second)
     }

     document.querySelector('.screen').textContent = result;
     document.querySelector('.arrayScreen').textContent = equation.join(' ');

     // Reset the variables for the next calculation
     a = 0;
     b = 0;
     op = '';
     equation = [];
 }); 

 // AC and DEL buttons which change the equation and global variable assignment
 let clearButton = document.querySelector('.clearButton')
 clearButton.addEventListener('click', function() {
    console.log('clear button clicked')
    console.log(`These are the variables, a:${a} and b:${b}. Op is set to:${op}`)

    if (a != 0 || b != 0 || op != '') {
        a = 0
        b = 0
        op = ''
    } else {
        a = 0;
        b = 0;
        op = '';
        equation = [];
    }
    document.querySelector('.screen').textContent = a;
    document.querySelector('.arrayScreen').textContent = error.textContent;
    console.log(`These are the variables, a:${a} and b:${b}. Op is set to:${op}`)
 })

 let deleteButton = document.querySelector('.deleteButton')
 deleteButton.addEventListener('click', function() {
    if (b != 0) {
        b = 0
        equation.pop()
        document.querySelector('.arrayScreen').textContent = equation.join(' ');
    } else if (op != '') {
        op = ''
        equation.pop()
        document.querySelector('.arrayScreen').textContent = equation.join(' ');
    } else if (a != 0) {
        a = 0
        equation.pop()
        document.querySelector('.arrayScreen').textContent = equation.join(' ');
    } 
 })
