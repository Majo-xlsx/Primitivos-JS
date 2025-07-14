const prompt = require("prompt-sync")();

// Ejercicio 1

for(let i = 1; i <= 10; i++){
    console.log(i);
}

// Ejercicio 2

let numero = parseInt(prompt("Ingrese un número: "));
for(let i = 1; i <= 10; i++){
    console.log(i * numero);
}