/*Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)*/

const laFrase = prompt("Escribe una frase y te dire las vocales que contiene");
let vocales = [];

alert(laFrase);

for (let index = 0; index < laFrase.length; index++) {
   
    if (laFrase.charAt(index) == "a" && "e" && "i" && "o" && "u") {
        //alert(laFrase.charAt(index));
        vocales.push(laFrase.charAt(index));
    }        
    alert(index);
}



