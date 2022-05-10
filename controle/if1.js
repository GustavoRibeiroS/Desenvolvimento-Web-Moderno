function soBoaNoticia(nota) {
    if (nota >= 7 ) {
        console.log("Aprovado com " + nota); 
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if (valor) { //como não há condição passada só imprimirá o que for true (verdadeiro)
        console.log('É verdade... ' + valor);
    }
}

seForVerdadeEuFalo() //undefined 
seForVerdadeEuFalo(null) //undefined
seForVerdadeEuFalo(undefined) //undefined
seForVerdadeEuFalo(NaN) //undefined
seForVerdadeEuFalo('') //undefined
seForVerdadeEuFalo(0)//undefined
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(" ")
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})