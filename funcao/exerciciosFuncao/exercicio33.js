function concatenar() {
    resultado = []
    for (let i = 0; i < arguments.length; i++) {
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

let vetorInteiro = [1, 2, 3]
let vetorString = ["bola", "carro", "dado"]
let vetorDouble = [1.1, 2.2, 3.3]

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))
