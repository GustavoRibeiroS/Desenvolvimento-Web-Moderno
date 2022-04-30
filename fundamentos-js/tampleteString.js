const nome = "Rebeca"
const concatenação = "Olá " + nome + "!"
const template = `
Olá
${nome}!`
console.log(concatenação, template)

//expressões
console.log(`1+1 = ${1+1}`) //Tudo que estiver em dolar ele vai tentar interpretar

const up = Stringtexto => Stringtexto.toUpperCase() //toUpperCase coloca as letras em maiúsculo
console.log(`Ei... ${up("cuidado")}!`) //pega a string up da linha 11 e a partir do $ joga a string que interpolou a função na palavra definida, no caso, "cuidado"