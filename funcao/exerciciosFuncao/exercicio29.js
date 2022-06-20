function numerosIntervalo(vetor) {
    let qtNumerosIntervalo = 0;
    let qtNumerosForaIntervalo = 0;

    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] >=10 && vetor[i]<=20) {
            qtNumerosIntervalo++
        }else{
            qtNumerosForaIntervalo++
        }
    }
    console.log(`Quantidade de números no Intervalo: ${qtNumerosIntervalo}`);
    console.log(`Quantidade de números fora do Intervalo: ${qtNumerosForaIntervalo}`);
}
vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
numerosIntervalo(vetor)