//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres
const primerNumero = parseInt(prompt("Te dire cual es el mayor numero de 3 que vas a ingresar; ingresa el primer numero: "));
const segundoNumero = parseInt(prompt("Ingresa el segundo numero: "));
const terceroNumero = parseInt(prompt("Ingresa el tercer numero: "));
let numeroMayor = 0;

if (primerNumero>segundoNumero && primerNumero>terceroNumero) {
    numeroMayor = primerNumero;
} else if(segundoNumero>terceroNumero) {
    numeroMayor = segundoNumero;
}
else{
    numeroMayor = terceroNumero;
}

alert("El numero mayor es: " + numeroMayor);