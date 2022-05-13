function soma() {
    let soma = 2
    for( let i in arguments){
        soma += arguments[i] // Novo valor de (soma = soma + arguments) // arguments[i] pega todos os argumentos passados
    }
    return soma // Como ele não tem nenhum argumento passado, ele retorna o valor da soma
}

console.log(soma());
console.log(soma(1));
console.log(soma (1.1, 2.2, 3.3));

console.log(soma (1.1, 2.2, "Teste"));
console.log(soma("a, b, c"));
