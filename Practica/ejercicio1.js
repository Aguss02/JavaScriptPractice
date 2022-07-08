let sumarNumeros = (nombreArreglo) => {

    let resultado = 0
    for(let i = 0; i < nombreArreglo.length; i++){
        if(nombreArreglo[i] % 2 !== 0){
            resultado = resultado + nombreArreglo[i]            
        }
    }
    return resultado
}
let resultado = sumarNumeros(numeros)
let resultado2 = sumarNumeros(numeros2)
let resultado3 = sumarNumeros([5, 2, 3])

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
console.log(sumarNumeros([1,5])); //Para probar si funciona y lo guardo en una variable.
