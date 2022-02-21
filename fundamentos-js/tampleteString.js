const nome = "Rebeca"
const concatenação = "Olá" + nome + "!"
const template = `
Olá
${nome}!`
console.log(concatenação, template)

//expressões
console.log(`1+1 = ${1+1}`) //Tudo que estiver em dolar ele vai tentar interpretar

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up("cuidado")}!`)