//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

const numeroUsuario = parseInt(
  prompt("Ingrese un numero para comprobar si es divisible por 2, 3, 5 o 7: ")
);
const divisores = [2, 3, 5, 7];
let capturaDivisor = 0;

for (let index = 0; index < divisores.length; index++) {
  if (numeroUsuario % parseInt(divisores[index]) === 0) {
    capturaDivisor = divisores[index];
    break;
  }
}

if (capturaDivisor > 0) {
  alert(`El ${numeroUsuario} es divisible en ${capturaDivisor}`);
} else {
  alert(`El ${numeroUsuario} no es divisble por 2, 3, 5 ni 7 :(`);
}
