// Si mide más de 1.40m y menos de 2m.
// Si mide menos de 1.40m hasta 1.20m puede subir acompañado.
// Si mide menos de 1.20m no puede subir aunque esté acompañado.

let puedeSubir = (altura, acompañada) => {
    if(altura >= 1.4 && altura < 2) {
        return 'Puede subir'
    } else if( altura < 1.4 && altura >= 1.2 && acompañada === true) {
        return 'Puede subir'
    } else { 
        return 'No puede subir'
    }
}

console.log(puedeSubir(1.2, false))