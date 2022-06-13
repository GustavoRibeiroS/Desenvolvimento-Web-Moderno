function calcularMedia(codAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    notas.sort((a,b) => a < b ? 1 : - 1) // Ordena os elementos do arrey. Se o primeiro argumento for menor que o segundo argumento retorna uma ordem positiva, caso contrário : (e o primeiro argumento for maior que o segundo) ele retorna a partir do menor, para que assim siga uma ordem crescente
    
    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Código do Aluno: ${codAluno}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularMedia(157,5,9,8)