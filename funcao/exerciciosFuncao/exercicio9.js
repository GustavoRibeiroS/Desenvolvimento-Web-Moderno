
function arredondar (notas) {
    if (notas % 5 >= 3) { //Se faltar apenas 3 ou mais para arredondar para o próximo multiplo de 5, realizar o arredondamento
        return notas + (5 - (notas % 5)) //Para mostrar o arredondamento ex: 38 + (5 - (3)) = 40
    } else {
        return notas
    }
}

function avaliaNotas(notas) {
    let notasArredondadas = arredondar(notas)
    
    if (notasArredondadas < 40 ) {
        console.log(`Aluno reprovado com nota: ${notasArredondadas}`);
    }else{
        console.log(`Aluno aprovado com nota: ${notasArredondadas}`);

    }
}
avaliaNotas(84)
avaliaNotas(35)
avaliaNotas(65)
avaliaNotas(98)
avaliaNotas(12)
avaliaNotas(38)
avaliaNotas(37)
avaliaNotas(40)