/* Escribe un programa que inserte cada uno de los elementos del arreglo nuevoArreglo, 
en el arreglo resultante del reto anterior arr, 
e imprima cada uno de los elementos en la consola.

let arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el último elemento"];
let newArray = ["Quinto", "Sexto"];
Resultado esperado:
Primero
Segundo
Tercero
Cuarto
Quinto
Sexto
Soy el último elemento*/


let array = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el ultimo elemento"]
array.splice(4, 0, "Quinto", "Sexto")

for (let i = 0; i < array.lenght; i++) {
    console.log(i + array[i]);
}

console.log(array)

