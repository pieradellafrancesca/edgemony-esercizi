//Esercizio 1

let sum = (firstNum, secondNum) => firstNum + secondNum;
let subtract = (firstNum, secondNum) => firstNum - secondNum;
let multiply = (firstNum, secondNum) => firstNum * secondNum;
let divide = (firstNum, secondNum) => firstNum / secondNum;

console.log(divide (10, 2));


// let a = prompt("Inserisci il primo numero:");
// let b = prompt("Inserisci il secondo numero:");

// function calculate(operation) {
    
//     if (operation === "+") {
//         let result = parseInt(a) + parseInt(b);
//         console.log(result);
//     }
//     else if (operation === "-") {
//         let result = parseInt(a) - parseInt(b);
//         console.log(result);
//     }
//     else if (operation === "*") {
//         let result = parseInt(a) * parseInt(b);
//         console.log(result);
//     }
//     else if (operation === "/") {
//         let result = parseInt(a) / parseInt(b);
//         console.log(result);
//     }
// }

// operation ("*");

function calculate(a, b, operation) {

    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    } else if (operation === "*") {
        return a * b;
    } else if (operation === "/") {
        return a / b;
    } else {
        return "Invalid operation";
    }
    
}

console.log(calculate (5, 6, "*"));
console.log(calculate (5, 6, "g"));

//Esercizio 2

function calculate2 (a, b, operation) {
    const result = 3;
    a (result);
}

function getRandomNumber (max) {
    console.log(Math.floor(Math.random() * max));
}

calculate2 (getRandomNumber, 5, "+")

