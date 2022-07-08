const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]

let menorTreinta = function(){
    let resultado = []
    for (let i = 0; i < arrayCuentas.length; i++){
        if(arrayCuentas[i].edadTitular < 30){
            resultado.push( arrayCuentas[i])
        }
    }
    return resultado
}


let mayorTreinta = function(){
    let resultado = []
    for (let i = 0; i < arrayCuentas.length; i++){
        if(arrayCuentas[i].edadTitular >= 30){
            resultado.push( arrayCuentas[i])
        }
    }
    return resultado
}

let igualTreinta = function(){
    let resultado = []
    for (let i = 0; i < arrayCuentas.length; i++){
        if(arrayCuentas[i].edadTitular = 30){
            resultado.push( arrayCuentas[i])
        }
    }
}

let menor = function(){

    let resultado = arrayCuentas[0].edadTitular

    for (let i = 0; i < arrayCuentas.length; i++) {

        if(arrayCuentas[i].edadTitular  < resultado){
            resultado = arrayCuentas[i].edadTitular
            
        }
        return arrayCuentas[i]
    }
}

console.log(menor())

// menor : function(array){

//     let resultado = array[0]

//     for (let i = 0; i < array.length; i++) {

//         if(array[i] < resultado){
//             resultado = array[i]
//         }
//     }
//     return resultado
// }