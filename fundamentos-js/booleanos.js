let isAtivo = false
console.log(isAtivo) //foi declarado o let isAtivo como uma variável falsa

isAtivo = true
console.log(isAtivo) //porém como é uma variavel, agora ele passa a ser verdadeiro

isAtivo = 1
console.log(!!isAtivo) //colocando a negação ! duas vezes ele volta para o valor original, no caso, verdadeiro

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!" ")
console.log(!!"palavra")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("Os Falsos...")
console.log(!!0)
console.log(!!"")
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Para finalizar...")
console.log(!!(""|| null || 0 || "epa"))

let nome = "Carlos" 
let nome2 = "" //Se não definir nome ele escreve como "Desconhecido"
console.log(nome || "Desconhecido")
console.log(nome2 || "Desconhecido")