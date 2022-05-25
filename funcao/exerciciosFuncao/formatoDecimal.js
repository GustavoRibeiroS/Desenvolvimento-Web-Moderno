function formatoDecimal(resultadoSoma) {
    valorReal = `R$ ${resultadoSoma.toFixed(2).toString().replace(".", ",")}` //Pega o resultado da soma, identifica até 2 casas decimais, reconhece como uma string "()" todo o valor e reaplica o "." no lugar da ","
    console.log(valorReal)
}
formatoDecimal(0.1 + 0.2)