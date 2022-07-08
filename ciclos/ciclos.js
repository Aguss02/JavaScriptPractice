const { type } = require("os");

const prompt = require("prompt-sync")({ sigint: true });

// 1) Escribí un programa que le pida al usuario ingresar una frase y la imprima en la consola. Recordá que para pedirle al usuario que escriba una frase debés utilizar el método prompt() y para escribir en la consola debés utilizar el método console.log().

// let frase = prompt("Ingrese una frase: ")

// console.log (frase)

// Escribí un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años" (siendo X la cantidad de años). Por ejemplo, asumiendo que el año actual es 2019 y el usuario ingresa 1999, el programa debe imprimir en la consola: “Tienes 20 años”.

// let fecha = new Date();
// let yy = fecha.getFullYear();

// let edad = (yyyyBirth, yy) => {

//     return yy - yyyyBirth

// }

// console.log(edad(2002, yy))

let adivinar = () => {

   let num = prompt("¿Qué número saldrá? ¡Elegí un número del 1 al 10: ")
   let aleatorio = Math.round(Math.random()*10) + 1

   if( num == aleatorio ) {
      return "¡Felicidades! El número era " + `${num}`
   } else {
      return "¡Incorrecto! El número era " + `${aleatorio}` + " y vos dijiste... " + `${num}`
   }

}

console.log(adivinar())
