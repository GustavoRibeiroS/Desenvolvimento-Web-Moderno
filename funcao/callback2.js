const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
let notasBaixas = []
    for (const valor in notas) {
        if (notas [valor] < 7 ) {
            notasBaixas.push(notas[valor]);            
        }
    }
console.log(notasBaixas);

//Com callback
const notasBaixas2 = notas.filter(function (nota) { // filter filtra os elementos de um arrey em um determinado critério, que é uma função callback, que retorna true ou false, se retornar true ela é adicionada ao arrey que é o reseultado da função
    return nota <7
})
console.log(notasBaixas2);

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);