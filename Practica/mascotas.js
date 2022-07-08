let misMascotas = [

    {
        nombre : 'Camila',
        raza : 'Perro',
        edad : 8,
        sonido : 'Rwuarr',
        molestarHumano : function(){
            return `${this.sonido}, ${this.sonido}!`
        }
    },
    {
        nombre : 'Fiona',
        raza : 'Gato',
        edad : 10,
        sonido : 'Meowww',
        molestarHumano : function(){
            return `${this.sonido}, ${this.sonido}!`
        }

    }
]


let escucharMascotas = () =>{

    for( let i = 0; i < misMascotas.length; i++){

        console.log(misMascotas[i].molestarHumano())
    }
}

let aumentarEdad = () => {

    for( let i = 0; i < misMascotas.length; i++){

        misMascotas[i].edad += 1

    }
   
}



let creadorId = () => {

    for ( let i = 0; i < misMascotas.length; i++){

        misMascotas[i].id = i + 1
        
    }
}

//Eliminar la propiedad raza

console.log(misMascotas)

for(let i = 0; i < misMascotas.length; i++){

    delete misMascotas[i].raza

}

console.log(misMascotas)
