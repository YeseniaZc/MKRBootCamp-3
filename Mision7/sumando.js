/*Sumando cualquier número Objetivo: 
Escribir una función llamada suma que reciba dos números y retorne su suma. 
Valida los siguientes casos con tu programa:
console.log(sum(10, 20)); // 30
console.log(sum(10, 10)); // 20
console.log(sum(40, 60)); // 100
console.log(sum(50, 200)); // 250 */


/*function sum(a, b) {
    return "Resultado suma " + a + b; 
} 
console.log(sum(10 + 20));
let sum = suma(10 + 20);
console.log(sum);*/

function suma(sum1, sum2) {
    let sum;
    sum = sum1 + sum2;
    return sum;
}

console.log("Resultado de suma es " + suma(10, 20));
console.log(suma(10, 20));

console.log("Resultado de suma es " + suma(10, 10));
console.log(suma(10, 10)); 

console.log("Resultado de suma es " + suma(40, 60));
console.log(suma(40, 60)); 

console.log("Resultado de suma es " + suma(50, 200));
console.log(suma(50, 200)); 

