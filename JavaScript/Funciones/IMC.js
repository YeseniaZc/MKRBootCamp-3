//forumla del IMC es: imc = peso / (altura ^ 2) 

function imc(peso, altura) {
    return peso / (altura ** 2); //el signo para elevar en JS es **
}

let imcCalculo = imc(55, 1.57);

console.log("Tu IMC es de: " + imcCalculo);