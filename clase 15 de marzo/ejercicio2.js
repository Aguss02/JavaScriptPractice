const prompt = require("prompt-sync")({ sigint: true})

let vehiculo = prompt("Ingrese el tipo de Vehiculo: ")
let litrosConsumidos = prompt("Ingrese los litros consumidos: ")

let totalAPagar = (vehiculo, litrosConsumidos)=>{

    let valor
    
    if (vehiculo = "coche") {
        console.log("El precio por litro es de $86");
        valor=86
    } else if(vehiculo = "moto"){
        console.log("El precio por litro es de $70")
        valor=70
    } else if(vehiculo = "autobus"){
        console.log("El precio por litro es de $55") 
        valor=55
    }

    if (litrosConsumidos > 0 && litrosConsumidos <=25){
        valor = valor * litrosConsumidos + 50

        console.log("El monto total a pagar es : $" + valor)

    } else if (litrosConsumidos > 25) {
        valor = valor * litrosConsumidos + 25

        console.log("El monto total a pagar es : $" + valor)
        
    }
}

totalAPagar(vehiculo, litrosConsumidos);
