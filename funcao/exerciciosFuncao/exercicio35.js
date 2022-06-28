let vetorPilha =  [1, 2, 3, 4, 5]
let vetorAdiciona = [6, 7, 8, 9, 10]

function adicionarVetor(vetorInicial, vetorAdicionado) {
    for (let i = 0; i < vetorAdicionado.length; i++) {
        vetorInicial.push(vetorAdiciona[i])
    }
    console.log('Vetor resultado: ' + vetorInicial)
}
adicionarVetor(vetorPilha, vetorAdiciona)