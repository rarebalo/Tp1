//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayorr
const primerNumero = parseInt(prompt("Mostrare cual es el numero mayor de dos que vas a ingresar; ingresa el primer numero:"));
const segundoNumero = parseInt(prompt("Ingresa el segundo numero:"));
let numeroMayor = 0 ;

if (primerNumero>segundoNumero) {
    numeroMayor = primerNumero;
} else {
    numeroMayor =segundoNumero;
}

alert("El numero mayor es: " + numeroMayor);