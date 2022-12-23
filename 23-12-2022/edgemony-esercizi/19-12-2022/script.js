// // 1 - IF, ELSE IF, ELSE
let operation = prompt ("Ciao! Inserisci un'operazione: ");
if (operation == "addizione" || operation == "sottrazione" || operation == "moltiplicazione" || operation == "divisione" || operation == "modulo") {
    let firstNum = prompt("Inserisci il primo numero:");
    let secondNum = prompt("Inserisci il secondo numero:");
    let intFirstNum = parseInt(firstNum);
    let intSecondNum = parseInt(secondNum);

    if (operation == "addizione") {
            console.log("La somma è: " + (intFirstNum + intSecondNum));
        } else if (operation == "sottrazione") {
            console.log("La differenza è: " + (intFirstNum - intSecondNum));
        } else if (operation == "moltiplicazione") {
            console.log("Il prodotto è: " + (intFirstNum * intSecondNum));
        } else if (operation == "divisione") {
            console.log("Il quoziente è: " + (intFirstNum / intSecondNum));
        } else if (operation == "modulo") {
            console.log("Il resto della divisione è: " + (intFirstNum % intSecondNum));
        }
} else {
    alert("Non hai inserito un'operazione valida!"); window.location.reload();
}


// // 2 - SWITCH
// let operation = prompt ("Ciao! Inserisci un'operazione: ");
// if (operation == "addizione" || operation == "sottrazione" || operation == "moltiplicazione" || operation == "divisione" || operation == "modulo") {
//     let firstNum = prompt("Inserisci il primo numero:");
//     let secondNum = prompt("Inserisci il secondo numero:");
//     let intFirstNum = parseInt(firstNum);
//     let intSecondNum = parseInt(secondNum);

//     switch(operation) {
//         case "addizione":
//             console.log("La somma è: " + (intFirstNum + intSecondNum));
//             break;
//         case "sottrazione":
//             console.log("La differenza è: " + (intFirstNum - intSecondNum));
//             break;
//         case "moltiplicazione":
//             console.log("Il prodotto è: " + (intFirstNum * intSecondNum));
//             break;
//         case "divisione":
//             console.log("Il quoziente è: " + (intFirstNum / intSecondNum));
//             break;
//         case "modulo":
//             console.log("Il resto della divisione è: " + (intFirstNum % intSecondNum));
//             break;
//     } 
// } else {
//     alert("Non hai inserito un'operazione valida!"); window.location.reload();
// }


// 3 - OPERATORE TERNARIO
// let operation = prompt ("Ciao! Inserisci un'operazione: ");
// operation == "addizione" || operation == "sottrazione" || operation == "moltiplicazione" || operation == "divisione" || operation == "modulo" ? console.log("Hai inserito un'operazione valida.") : console.log("Attenzione! Hai inserito un'operazione NON valida!");
