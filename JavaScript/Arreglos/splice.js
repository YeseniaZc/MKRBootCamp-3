let nombres = ["Lina", "Oscar", "Maria", "Juan"]

console.log("array inicial", nombres)

//insertar en una posicion especifica
nombres.splice(2, 0, "Ana");

console.log("array con ana" , nombres);

//eliminando elementos
nombres.splice(1, 3);

console.log("array eliminando", nombres)

//eliminando todos los elementos desde una posicion
nombres.splice(0);

console.log("array eliminando todo", nombres)