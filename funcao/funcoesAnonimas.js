const soma = function (x,y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) { //armazena 3 parametros, a, b e o terceiro parâmetro (operação) irá atuar em cima dos parametros a e b, caso não passe nada na operacao assume a função soma da linha 1
    console.log(operacao(a,b));
}

imprimirResultado(3, 4)

imprimirResultado(3, 4, soma)

imprimirResultado(3, 4, function (x, y) { //passou uma operação, logo, substituindo a função soma da linha 1
    return x - y
})

imprimirResultado(3, 4, (x, y) => x * y) //passou una arrow function

const Pessoa = {
    falar : function () {
        console.log('Opa');
    }
}

Pessoa.falar()