/* 2. Fix Error: Valor vs. Referencia de Tipos
Cree una función que devuelva true si dos arreglos contienen valores idénticos y
false en caso contrario.
Para resolver esta pregunta, tu amigo escribe el siguiente código:
function checkEquals(arr1, arr2) {
if (arr1 === arr2) {
return true
} else {
return false
}
}
Pero probando el código, ves que algo no está del todo bien. Ejecutar el código
arroja los siguientes resultados:
checkEquals([1, 2], [1, 3]) ➞ false
// Good so far...
checkEquals([1, 2], [1, 2]) ➞ false
// Yikes! What happened?
Reescribe el código de tu amigo para que verifique correctamente si dos arreglos
son iguales. Para ser iguales, los arreglos deben tener los mismos elementos en el
mismo orden.
Las siguientes pruebas deben pasar:
Test Case Expecte
d
checkEquals([1, 2], [1, 3]) false
checkEquals([1, 2], [1, 2]) true
checkEquals([4, 5, 6], [4, 5, 6]) true
checkEquals([4, 7, 6], [4, 5, 6]) false
checkEquals([4, 7, 6], [4, 6, 7]) false */


function checkEquals(arr1, arr2) {
    if (arr1 === arr2) {
    return true
    } else {
    return false
    }
    }

    console.log("checkEquals"([1, 2], [1, 3]));
    console.log("checkEquals"([1, 2], [1, 2]));
    console.log("checkEquals"([4, 5, 6], [4, 5, 6]));
    console.log("checkEquals"([4, 7, 6], [4, 5, 6]));


