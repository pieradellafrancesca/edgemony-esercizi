//Esercizio 1
    function phrase(firstWord) {
        return firstWord + "bootcamp";
    }
   
    let myPhrase = phrase("Coding ");
    console.log(myPhrase);

    
//Esercizio 2
const francesca = {
    myName: "Francesca",
    surname: "Pierini",
    age: 35,
    job: "student",
    hello: function () {
        alert("Ciao, sono " + this.myName + " " + this.surname + ".");
    },
};

francesca.hello();


//Avanzato - Primo punto
function calculator () {
    let operation = prompt("Inserisci un'operazione:");
    let num1 = prompt("Inserisci il primo numero:");
    let parsedNum1 = parseInt(num1);
    let num2 = prompt("Inserisci il secondo numero:");
    let parsedNum2 = parseInt(num2);

    if (operation === "+") {
        console.log(parsedNum1 + parsedNum2);
    } else if (operation === "-") {
        console.log(parsedNum1 - parsedNum2);
    } else if (operation === "*") {
        console.log(parsedNum1 * parsedNum2);
    } else if (operation === "/") {
        console.log(parsedNum1 / parsedNum2);
    }
    
}

calculator ();


//Avanzato - Secondo punto
function calculator2 (operation2, arr = [num3, num4]) {
    
    if (operation2 === "+") {
        console.log(arr[0] + arr[1]);
    } else if (operation2 === "-") {
        console.log(arr[0] - arr[1]);
    } else if (operation2 === "*") {
        console.log(arr[0] * arr[1]);
    } else if (operation2 === "/") {
        console.log(arr[0] / arr[1]);
    }
}

calculator2 ("+", [5, 10]);
calculator2 ("-", [5, 10]);
calculator2 ("*", [5, 10]);
calculator2 ("/", [5, 10]);