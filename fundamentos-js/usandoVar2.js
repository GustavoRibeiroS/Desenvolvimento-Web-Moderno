var numero = 1
{
    var numero = 2
    console.log("Dentro = ", numero);
}
console.log("fora = ", numero);
//Independente de estar dentro ou fora do escopo, como se trata de uma var, terá alteração no valor se for redefinido no código