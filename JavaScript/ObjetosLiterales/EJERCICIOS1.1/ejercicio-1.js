/*1. Fix Error: manipulación de arreglos
¡Ayuda a corregir todos los errores en la función incrementItems! ¡Está destinado a
agregar 1 a cada elemento en el arreglo!

function incrementItems(arr) {
for (let i = 0; i < array.length; i++) {
arr[i] === arr[i] + 1
}
return array
}
Test Case Expected
incrementItems([0, 1, 2, 3]) [1, 2, 3, 4]
incrementItems([2, 4, 6, 8]) [3, 5, 7, 9]
incrementItems([-1, -2, -3, -4]) [0, -1, -2, -3 */

function incrementItems(arr) {
    for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1
    }

    return arr
    }

console.log(incrementItems ([0, 1, 2, 3]));
console.log(incrementItems ([2, 4, 6, 8]));
console.log(incrementItems ([-1, -2, -3, -4])); 
