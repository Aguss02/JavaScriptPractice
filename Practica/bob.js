const alicia = [10 ,50 ,75];
const bob = [90, 50, 25];

let concurso = {
    etapas : [],
    encontrarGanador : function(a, b){

    let puntosAlicia = 0
    let puntosBob = 0 
    
    for (let i=0 ; i<3 ; i++){
        
        if( a[i] > b[i] ){
            puntosAlicia = puntosAlicia + 1
            this.etapas.push(' Alicia')
        } else if (b[i] > a[i]){
            puntosBob = puntosBob + 1
            this.etapas.push(' Bob')
        } else {
            this.etapas.push(' Empate')
        }
        console.log('---------- Empieza la ronda ----------')
        console.log('---------- Puntos Alicia ----------')
        console.log(puntosAlicia)
        console.log('---------- Puntos Bob ----------')
        console.log(puntosBob)
        }
    } 
}


concurso.encontrarGanador(alicia, bob)