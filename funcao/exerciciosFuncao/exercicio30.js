function maiorMenor(vetor) {
    let maior = vetor[0]
    let menor = vetor[0]

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]
        }else if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }
    return [maior, menor]

}
const vetor = [10, -2, -7, 5, 7, 3, 1, 3, 11, 35, 20, 6, 9]
console.log(maiorMenor(vetor));