//mayusculas
let name = "Yesenia";
console.log(name.toUpperCase());

//minusculas
let saludo= "HOLA MUNDO";
console.log(saludo.toLowerCase());

// inicia con
console.log(saludo.startsWith("HOLA"));

//termina con
console.log(saludo.endsWith("HOLA"));

//metodos anidados
console.log(saludo.toLowerCase().startsWith("hola"));

//metodo substr - NO USAR (Deprecado)
console.log(saludo.substr(0, 4));
console.log(saludo.substr(5, 3));

//metodo substring
console.log(saludo.substring(0, 4));
console.log(saludo.substring(5, 7)); //imprime hasta la posicion que se requiera

//metodo replace
saludo = saludo.replace("MUNDO", "GRUPOB3"); //aqui cambia la variable como tal
console.log(saludo.replace("MUNDO", "GRUPOB3"));

//metodo includes
console.log(saludo.includes("MUNDO"));
