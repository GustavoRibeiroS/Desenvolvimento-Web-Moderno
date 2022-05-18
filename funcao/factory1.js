// Factory é um afunção que sempre retorna um novo objeto

/* const prod1 = {
    nome: "Palmolive",
    preco: 43
}

const prod2 = {
    nome: "Pomarola",
    preco: 23
} */

// Factory simplês
function criarPessoa() {
    return{
        nome: "Ana",
        Sobrenome: "De armas"
    }
}

console.log(criarPessoa());