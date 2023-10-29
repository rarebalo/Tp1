// Escribe un programa que pida un número y diga si es divisible por 2

const tuNumero = parseInt(prompt("Te voy a indicar si un numero es divisible por 2, ingresa el numero que deseas consultar: "));
let esDivisible = "no";

if ((tuNumero % 2)> 0) {
    esDivisible = "no es ";
} else {
    esDivisible = "es ";
}

alert("tu numero " + esDivisible + "dibisible por 2");
