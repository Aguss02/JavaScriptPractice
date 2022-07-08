// ARRAY, OBJETOS, IF ELSE, Y CICLO FOR

// CREAR UN ARRAY DE PERSONAS CON LAS SIGUIENTES PROPIEDADES CADA UNA:
// NOMBRE, APELLIDO, EDAD, PROFESION, cantidadHermanos Y ADEMAS UN METODO QUE NOS RETORNE EL
// NOMBRE COMPLETO DE LA PERSONA
// LUEGO CON UN BUCLE O CICLO INCREMENTAR LA CANTIDAD DE HERMANOS DE CADA PERSONA EN 3



let arrayPersonas = [
    {
        nombre : 'Agustina',
        apellido : 'Tosi',
        edad : 19,
        profesion : 'Desarroladora',
        cantidadHermanos : 1,
        nombreCompleto : function(arr){
            return this.nombre + ' ' + this.apellido
        }
    },
    {
        nombre : 'Agustin',
        apellido : 'Bordon',
        edad : 15,
        profesion : 'Estudiante',
        cantidadHermanos : 3,
        nombreCompleto : function(arr){
            return this.nombre + ' ' + this.apellido
        }
    }
]

let aumentarHermanos = function(arr){

    for(let i = 0; i < arr.length; i++){
        arr[i].cantidadHermanos += 3
    }   
    return arrayPersonas
}

// console.log(aumentarHermanos(arrayPersonas))

  // MATRICES
  // DADA LA SIGUIENTE MATRIZ
  
  let matriz = [
    [5, 1, 12, 24],
    [19, 2, 7, 11],
    [10, 3, 14, 27]
  ];
  
  // CALCULAR LA SUMA TOTAL DE LA COLUMNA EN LA POSICION 1 ( RECORDA QUE EMPIEZA EN LA POSICION 0)
  // CALCULAR EL RESULTADO DE MULTIPLICAR TODO LOS ELEMENTOS DE LA FILA EN LA POSICION 2 ( RECORDA QUE EMPIEZA EN LA POSICION 0)
  // CALCULAR EL TOTAL DE LA SUMA DE TODO LOS ELEMENTOS DE LA MATRIZ
  

  let sumaTotal = (matriz) => {

    for (let i = 0; i < matriz[0].length; i++) {
    
        
    }

  }



  // CREAR UNA MATRIZ DE 5 X 5 CON LOS VALORES QUE TU QUIERAS
  // CREAR UNA FUNCION QUE NOS RETORNE EL TOTAL DE MULTIPLICAR TODOS LOS NUMEROS
  // DE LA DIAGONAL PRINCIPAL
  // CREAR UNA FUNCION QUE NOS RETORNE EL TOTAL DE SUMAR TODOS LOS NUMEROS DE LA DIAGONAL SECUNDARIA
  // EN UNA VARIABLE GUARDAR EL RESULTADO DE DIAGONALPRINCIPAL MENOS DIAGONALSECUNDARIA
  
  // ALGORITMO BUBBLE SORT
  
  // DADO EL SIGUIENTE ARRAY DE NUMEROS, ORDENARLO DE FORMA ASCENDENTE Y LUEGO DESCENDETE
  
  let numerosParaOrdenar = [12, 15, 2, 19, 4, 13, 22, 1];
  
  let ordernar = (array) => {

    let temp; 

    for (let i = 0; i < array.length; i++) {

        for (let j = 0; j < array.length - 1; j++) {
         
            if (array[j].cantidadHermanos < array[j + 1].cantidadHermanos) {

                temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
                
            }
            
        }
        
    }

    return array

  }

  console.log(ordernar(arrayPersonas))


  // AHORA DEBERAS ORDENAR EL ARRAY DE PERSONAS QUE CREASTE AL INICIO DE FORMA ASCENDENTE
  // EN BASE A LA CANTIDAD DE HERMANOS E IMPRIMIRLO POR CONSOLA PARA VERIFICAR
  
  // LUEGO DEBERAS ORDENARLO DE FORMA DESCENDENTE EN BASE A LA PROPIEDAD NOMBRE
  
  