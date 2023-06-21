/* Ejercicio. Queremos hacer un programa que imprima
los numeros del 10 a 20 pero saltando cada otro numero,
es decir, que imprima 10, 12, 14, 16, 18 y 20. 
El primer paso antes de escribir el ciclo es identificar
el incremento y el cuerpo */

// inicializacion i: 10
// condicion: i menor o igual a 20
// incremento: +2
// cuerpo: console.log el valor

for (let i = 10; i <= 20; i = i +2) {
    console.log("Número: " + i)
}