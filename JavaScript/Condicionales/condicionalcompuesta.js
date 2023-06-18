// condicionales compuestas
let number = 15

if (number >= 10) {
    if (number <= 20) {
        console.log("El número esta entre 10 y 20")
    }
}

// En una sola linea de codigo //esta es la mas correcta usando operadores logicos (y)&& y (ó)||
if (number >= 10 && number <= 20) {
    console.log("El número esta entre 10 y 20!!")
}


//ejemplo 2 en clase
let num = 45

if (num >= 10 && num <= 20) {
    console.log ("El número esta entre 10 y 20");
} else {
    console.log("El número NO esta entre 10 y 20")
}

// ejemplo con operador logico (ó)||
let color = "negro"

if (color === "negro" || color === "rojo") {
    console.log("Excelente elección de color")
} else {
    console.log("No me gusta ese color")
}

//operador ternario (solo para else, es decir un if y un else, no sirve con else if)
num <= 100 ? console.log("El número es menor o igual a 100") : console.log("El número es mayor a 100"); 
