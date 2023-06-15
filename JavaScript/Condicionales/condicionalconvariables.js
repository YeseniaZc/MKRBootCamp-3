let num = 25;

if (num >= 100) { //if
    console.log("El número es mayor o igual 100")
}

if (num >= 100) {  //if - else
    console.log("El número es mayor a 100")
} else {
    console.log("El número NO es mayor o igual a 100")
}

//condicionales anidados
if (num > 100) {  //if - else if - else
    console.log("El número es mayor a 100")
} else if (num < 100) {
    console.log("El número es menor a 100")
} else if (num === 100) {
    console.log("El número es igual a 100")
} else {
    console.log("No cumple con ninguna condición")
}

