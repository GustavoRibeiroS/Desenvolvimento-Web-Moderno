function paresImpares(vetorNumeros) {
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros [i] %2 == 0) {
            pares++
        }else{
            impares++
        }
    }
    console.log(`A quantidade de pares é: ${pares}, e a quantidade de ímpares é ${impares}`);
}
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)