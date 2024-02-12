// 1
function greet(name) {
    return 'Hello ' + name;
}

let message = greet('John');
console.log(message);

// 2
const numbers = [8, 12, 5, 17, 10];

function printNumbersAbove10(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            console.log(arr[i]);
        }
    }
}

printNumbersAbove10(numbers);

// 3
function calculate(num1, num2, operator) {
    let result;
    switch (operator) {
        case 'plus':
            result = num1 + num2;
            break;
        case 'minus':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operator';
            break;
    }
    return result;
}

const number1 = 10;
const number2 = 5;
const operation = 'minus';
const calculationResult = calculate(number1, number2, operation);

console.log(calculationResult);

// 4
function calculator(num1, num2, operation) {
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid operation';
    }
    return result;
}

let additionResult = calculator(5, 3, 'add');
console.log(additionResult); 

let subtractionResult = calculator(8, 4, 'subtract');
console.log(subtractionResult); 

let multiplicationResult = calculator(6, 2, 'multiply');
console.log(multiplicationResult); 

let divisionResult = calculator(10, 5, 'divide');
console.log(divisionResult); 