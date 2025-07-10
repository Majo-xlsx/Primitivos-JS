const prompt = require("prompt-sync")();

// Ejercicio 1

let anioNacimiento = prompt("¿En qué año naciste? ");
anioNacimiento = parseInt(anioNacimiento);
let edad = 2025 - anioNacimiento;
console.log("Tu edad es:", edad);

// Ejercicio 2

let num1 = parseFloat(prompt("Primer número: "));
let num2 = parseFloat(prompt("Segundo número: "));
let suma = num1 + num2;
console.log("La suma es:", suma);