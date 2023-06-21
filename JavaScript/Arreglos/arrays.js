/*let array = [1, "Dani", true, false, "Juan"]
array [1]
 esto en la terminal
 array[array.lenght - 1] */


let array = [1, "Dani", 34, true, "Juan", false, 23]
//posicion
const pos = array[4]; //let tambien

console.log("Esta es mi posicion 4: " + pos);

console.log("ARRAY " + array);

//recorrer un arreglo

for (let i = 0; i < array.length; i++) {
    console.log("Este es mi dato en la posicion " + i + ": " + array[i]);
}

//reasignar valor
array[3] = "Hola";

console.log(array[3]);

console.log("ARRAY** " + array);

