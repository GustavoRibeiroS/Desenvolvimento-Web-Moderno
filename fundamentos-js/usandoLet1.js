var numero = 1
{
    let numero = 2
    console.log("Dentro = ", numero) //let usa prioridade no escopo menor -  Há Escopo de bloco
}
console.log("Fora = ", numero);

console.log("Mesmo que seja definida uma variável numero2 no escopo menor, o programa irá procurar a variavel numero, mesmo tendo redefinido o valor no numero2")

{
    let numero2 = 2
    console.log("Dentro = ", numero) //mesmo redefinindo o valor na variavel numero2 o let irá procurar a variavel numero
}
console.log("Fora = ", numero);