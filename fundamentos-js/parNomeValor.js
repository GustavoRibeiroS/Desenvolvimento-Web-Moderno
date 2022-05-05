const saudacao = "Opa" //contexto léxico 1


function exec() {
    const saudacao = "Salve" //contexto léxico 2
    return saudacao
}

const cliente = {
    nome: "Pedro", idade: 32, peso: 86, endereco: {
        logradouro: "Rua dos bobos", Numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);