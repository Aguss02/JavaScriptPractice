let estudiante = {
    nombre : 'Agustina',
    apellido : 'Tosi',
    camada : 'C6',
    esParcial : true,
    nota : function(x){
        console.log(`El alumno obtuvo una nota igual a ${x} por lo tanto su condición es: `)
        if (x < 4){
            return 'Desaprobado'
        } else if (x >= 4 && x < 7){
            return 'Debe rendir examen final'
        } else {
            return 'Promocionado'
        }
    }
}

console.log(estudiante.nota(2))

