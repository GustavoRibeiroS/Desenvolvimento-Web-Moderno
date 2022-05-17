const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`); //passa uma função para outra função e quando determinado evento acontecer ela vai ser chamada de volta
}

fabricantes.forEach(imprimir) //forEach passa no arrey e para cada elemento ele chama os parâmetros da função imprimir de nome e índice. Callback.

fabricantes.forEach(function (marcas) {
    console.log(marcas); //cada elemento do arrey
})

fabricantes.forEach(marcasArrow => console.log(marcasArrow))