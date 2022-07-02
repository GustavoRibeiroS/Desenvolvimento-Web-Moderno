let vetorA = [1, 2, 3]
let vetorB = [4, 5, 6]

function trocarVetores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for (let i = 0; i < vetorA.length; i++) {
            vetorA[i] = vetorA[i] + vetorB[i]
            vetorB[i] = vetorA[i] - vetorB[i]
            vetorA[i] = vetorA[i] - vetorB[i]
            
        }
        }else{
            console.log("Vetores de tamnhos diferentes");
    }
    console.log("Valor do novo vertor A: " + vetorA);
    console.log("Valor do novo vertor B: " + vetorB);
}

trocarVetores(vetorA, vetorB)