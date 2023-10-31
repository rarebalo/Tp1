//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

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
  
  if (numeroUsuario == 0) {
    alert(`Si intentas dividir ${numeroUsuario} en 'x' cantidad siempre te sobrara 0 y a su vez cada division sera de 0 por ende lo puedes hacer hasta el infinito pero realmente se puede dividir la nada misma?`);  
  } else if (capturaDivisor > 0){
    alert(`El ${numeroUsuario} es divisible en ${capturaDivisor}`);
  } else{
    alert(`El ${numeroUsuario} no es divisble por 2, 3, 5 ni 7 :(`);
  }
  