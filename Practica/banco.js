//---Crear aplicación de un Banco----------

//la lista de clientes.
let arrayCuentas = [
    {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
    },
    {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
    },
    {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
    },
    {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
    },
    {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
    },
];
  
let banco ={
    /* 2*/ 
    clientes :arrayCuentas,
    /* 3 */
    consultarCliente :function(titular){
      let clienteEncontrado;
      let mensaje = "Lo siento, no hay coincidencia."
      for(let i = 0; i<this.clientes.length; i++ ){
        if(this.clientes[i].titularCuenta === titular){
          clienteEncontrado = this.clientes[i]
        }
      }
      return clienteEncontrado? clienteEncontrado:mensaje
    },
    /* 4 */
    deposito : function(nombre, cantidadDinero){
        let titularCuenta = this.consultarCliente(nombre)
        titularCuenta.saldoEnPesos += cantidadDinero
        return `Depósito realizado, su nuevo saldo es: ${titularCuenta.saldoEnPesos}`
    },
    /* 5 */
    extraccion : function(nombre, cantidadDinero){
      let titularCuenta = this.consultarCliente(nombre)
        titularCuenta.saldoEnPesos -= cantidadDinero
        if(titularCuenta.saldoEnPesos < 0){
          return 'Fondos insuficientes.'
        } else {
          return `Extracción realizada correctamente, su nuevo saldo es: ${titularCuenta.saldoEnPesos}`
        }
    }
  }

console.log('----- Antes de la extracción -----')
console.log(banco.consultarCliente("Ansel Ardley"))

console.log(banco.extraccion("Ansel Ardley", 2554445))

console.log('----- Después de la extracción -----')
console.log(banco.consultarCliente("Ansel Ardley"))

let propiedadUnica = (array, consulta) => {

  for(let i = 0; i< array.length; i++ ){


    console.log(array[i].consulta)

}
}









