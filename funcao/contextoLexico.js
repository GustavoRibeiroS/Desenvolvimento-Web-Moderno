const valor = 'Global'

function minhaFuncao() {
    console.log(valor);
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec() //Mesmo mudando o valor da função ela vai procurar o valor o quel ela foi definida
minhaFuncao()