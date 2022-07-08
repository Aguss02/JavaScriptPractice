const prompt = require("prompt-sync")({ sigint: true });

// NIVEL I
let sumar = function(a, b){
    return a+b;
}
let restar = function(a,b){
    return a-b;
}
let multiplicar = function(a,b){
    return ab;
}
let dividir = function(a,b){
    return a/b;
}

console.log(" NIVEL II ");

console.log("suma (3,6)");
console.log(sumar(3,6));

console.log("resta (3,6)");
console.log(restar(3,6));

console.log("multiplicar (3,6)");
console.log(multiplicar(3,6));

console.log("multiplicar (3,0)");
console.log(multiplicar(3,0));

console.log("dividir (3,6)");
console.log(dividir(3,6));

console.log("dividir (3,6)");
console.log(dividir(3,0));
console.log("**");
 
function  cuadradoDeUnNumero(n){
    return multiplicar(n,n)
}

function promedioDeTresNumeros(a,b,c){
    let sum = sumar(a,b);
    return sumar(sum,c)/3;

}
function calcularPorcentaje(numero ,porcentaje){
   return multiplicar(numero, dividir(porcentaje,100));
}
function generadorDePorcentaje(a, b){
    return dividir(multiplicar(a,100),b)
}

console.log(generadorDePorcentaje(2,200));