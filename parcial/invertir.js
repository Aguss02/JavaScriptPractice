
/**
 * Realizar una función que, dada
 *  una lista, devuelva una nueva lista
 *  cuyo contenido sea igual a la
 *  original pero invertida.
 */

 const lista = ["A", "B", "C", "D", "E", "F"];

 let invertir = function(arr){
     arr.reverse()
     return arr
 } 
 
 console.log('---- Lista ----')
 console.log(lista);
 console.log('---- Lista Invertida----')
 console.log(invertir(lista));