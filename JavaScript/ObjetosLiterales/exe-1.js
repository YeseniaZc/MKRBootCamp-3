//los objetivos en javascript ayudan a agrupar información.
//el objeto se define utilizando corchetes{} y las propiedades se separan con coma ,

let persona = {
    name: "Pedro",
    apellido: "Suarez",
    edad: 35,
    estatura: 1.6,
}

console.log("Objeto Persona", persona);
let llave = "name"
console.log(persona[llave]);
console.log(persona.apellido);
console.log(persona["edad"]); //esta es otra forma de accede a un valor especifico
console.log(persona["estatura"]);

persona.peso = 56;
console.log("Objeto persona modificado", persona)

persona.edad = 36;
console.log("Objeto persona modificado edad", persona)

delete persona.estatura;
console.log("Objeto persona eliminando", persona);

