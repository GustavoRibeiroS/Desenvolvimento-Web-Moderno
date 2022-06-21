function percorreVetor(vetor) {
    let qtNegativos = 0
    let negativo = vetor[0]

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] < negativo) {
            negativo =  vetor[i]
            qtNegativos++
        }
    }
    console.log(`${qtNegativos}`);
}
vetor = [10, 5, -7, 3, -1, 3, -11, -20, 6, 9]
percorreVetor(vetor)