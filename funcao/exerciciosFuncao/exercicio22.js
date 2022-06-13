function valorAnuidade(mes, valor) {
    if (mes >0 && mes<13) {
         tempo = mes - 1 //Mes de janeiro não possui o juros de 5%
         Montante = valor * (1 + (5 * 0.01)) ** tempo
        return Montante.toFixed(2)
    } else {
        return "Mês Inválido"
}
}
console.log(valorAnuidade(2,100));