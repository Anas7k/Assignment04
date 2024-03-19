// ADD A FUNCTION CALLED CALCULATE
function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
    }
    return result;
}

let firstNumber, secondNumber, operation;

// COLLECT FIRST NUMBER FROM USER
do {
    firstNumber = parseFloat(prompt('Enter the first number:'));
    if (isNaN(firstNumber)) {
        alert('Invalid number. Please try again.');
    }
} while (isNaN(firstNumber));

// COLLECT SECOND NUMBER FROM USER
do {
    secondNumber = parseFloat(prompt('Enter the second number:'));
    if (isNaN(secondNumber)) {
        alert('Invalid number. Please try again.');
    }
} while (isNaN(secondNumber));

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
do {
    operation = prompt('Enter the operation (+, -, *, /):');
    if (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/') {
        alert('Invalid operator. Please try again.');
    }
} while (operation !== '+' && operation !== '-' && operation !== '*' && operation !== '/');

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
let result = calculate(firstNumber, secondNumber, operation);
alert(`${firstNumber} ${operation} ${secondNumber} = ${result}`);