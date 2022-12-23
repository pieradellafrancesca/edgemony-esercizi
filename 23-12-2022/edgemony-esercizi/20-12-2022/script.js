//Esercizio 1
let cities = [];

for (let i = 0; i < 10; i++) {
    cities.push(prompt("Inserisci una città:"));
}
console.log(cities);


//Tentativo di "Avanzato"

for (let cityIndex in cities) {
    console.log(cityIndex + ": " + cities[cityIndex]);
}

for (let city of cities) {
    console.log(cities.indexOf(city) + ": " + city);
}