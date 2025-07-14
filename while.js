const prompt = require("prompt-sync")();

// Ejercicio 1

let numero = prompt("Ingrese un número: ");
numero = parseInt(numero);
let contador = 1;
while (contador <= numero){
    console.log(contador);
    contador++;
}

// Ejercicio 2

let contarsena = prompt("Ingrese una contraseña de 4 números: ");
contarsena = parseInt(contarsena);
while (contarsena !== 1234){
    console.log("Contraseña incorrecta.");
    contarsena = parseInt(prompt("Intente de nuevo: "));
}
console.log("Contraseña correcta.");