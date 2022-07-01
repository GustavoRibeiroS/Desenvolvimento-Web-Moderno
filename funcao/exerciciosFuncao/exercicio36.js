let vetor = [1, 2, 3, 4, 5, 7]

function multiplicaVetor(vetor, multiplicador) {
    let resultadoVetor = []

    vetor.forEach(element => { resultadoVetor.push(element * multiplicador)});
    
    return resultadoVetor
}

console.log(multiplicaVetor(vetor, 8))
