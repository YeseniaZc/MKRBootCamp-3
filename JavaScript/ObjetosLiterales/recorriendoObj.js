let persona = {
    name: "Pedro",
    apellido: "Suarez",
    edad: 35,
    estatura: 1.6,
}

// usando metodos especificos para objetos
// Recorrer las propiedades de un objeto

for (let llave in persona) {
    if (persona.hasOwnProperty(llave)){
        console.log(persona[llave]);
    }
}

// Usando propiedad Object.keys
let llaves = Object.keys(persona);
console.log("LLAVES---", llaves);

for (let i = 0; i < llaves.length; i++) {
    let llave = llaves[i];
    console.log(persona[llave]);
}
