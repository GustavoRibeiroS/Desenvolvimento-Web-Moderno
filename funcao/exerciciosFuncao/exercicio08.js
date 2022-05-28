let pontuacaoJogos = [10, 20, 20, 8, 25, 3, 0, 30, 1]

function avaliaPontuacoes(pontuacaoJogos) {
    let bateuRecorde = 0
    let piorJogo = 0 //(Verificar pq recebe 1 no Ex)
    let maiorPontuacao = pontuacaoJogos[0]
    let menorPontuacao = pontuacaoJogos[0]

    for (let i = 1; i < pontuacaoJogos.length; i++) { //i = 1 pois ele não considera a primeira partida
        if (pontuacaoJogos[i] > maiorPontuacao) {
            maiorPontuacao = pontuacaoJogos[i]
            bateuRecorde++
        }else if(pontuacaoJogos[i] < menorPontuacao) {
            menorPontuacao = pontuacaoJogos[i]
            piorJogo = i+1 //ele soma +1 pois se procuara a posição do pior jogo, não a quantidade
        }
    }    
        return [bateuRecorde, piorJogo]
}
console.log(avaliaPontuacoes(pontuacaoJogos));