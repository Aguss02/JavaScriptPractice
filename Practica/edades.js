const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

let arrayFunciones = {
    menores : function(array){
        let resultado = []
        for (let i = 0; i < array.length; i++){
            if(array[i] < 18){
                resultado.push(array[i])
            }
        }
        return resultado
    },
    mayores : function(array){
        let resultado = []
        for (let i = 0; i < array.length; i++){
            if(array[i] >= 18){
                resultado.push(array[i])
            }
        }
        return resultado
    },
    igualDieciocho : function(array){
        let resultado = []
        for (let i = 0; i < array.length; i++){
            if(array[i] = 18){
                resultado.push(array[i])
            }
        }
        return resultado
    },
    mayor : function(array){
        let resultado = array[0]
        for (let i = 0; i < array.length; i++) {
            if(array[i] > resultado){
                resultado = array[i]
            }
        }
        return resultado
    },
    menor : function(array){

        let resultado = array[0]
    
        for (let i = 0; i < array.length; i++) {
    
            if(array[i] < resultado){
                resultado = array[i]
            }
        }
        return resultado
    },
    promedio : function(array){

        let resultado = 0
    
        for (let i = 0; i < array.length; i++) {
            resultado += array[i]
        }
        resultado /= array.length
        return resultado
    },
    sumaUno : function(array){

        let resultado = []
    
        for (let i = 0; i < array.length; i++) {
            resultado.push(array[i] + 1) 
        }
        return resultado
    }
}

console.log(arrayFunciones.menor(edades))