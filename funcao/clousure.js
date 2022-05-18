// Clousure é um escolo criado quadno uma função é declarada
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto lexico em ação

const x = "Global"

function fora() {
    const x = "Local"
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao());