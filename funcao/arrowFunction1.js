let dobro = function(a) {
    return 2 * a
}
console.log(dobro(3));

dobro = (a) =>{ //dunction trocado pela seta
    return 2 * a
}
console.log(dobro(5));

dobro = a => 2 * a // Se tirar os parênteses você tem um retorno implícito, uma função que tem um único trabalho e o return é chamado na mesma linha
console.log(dobro(Math.PI)); 

ola = () => 'Olá'
ola = _ => 'Olá' //possui um parâmetro, mas pode ignorar se quiser
console.log(ola());