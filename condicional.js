const prompt = require("prompt-sync")();

// Ejercicio 1

let edad = parseInt(prompt("¿Cuántos años tienes? "));
if (edad >= 18) {
    console.log("Puedes entrar");
} else {
    console.log("No puedes entrar");
}

// Ejercicio 2

let numero = parseFloat(prompt("Ingresa un número: "));
if (numero > 0) {
    console.log("Es positivo");
} else if (numero < 0) {
    console.log("Es negativo");
} else {
    console.log("Es cero");
}