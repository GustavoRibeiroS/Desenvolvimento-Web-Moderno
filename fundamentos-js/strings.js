const escola = "cod3r"

console.log(escola.charAt(4)) //Retorna a letra do local da palavra (começa do 0)
console.log(escola.charAt(5)) //não retorna a letra que não localiza
console.log(escola.charCodeAt(3)) //Localiza o número do código HTML na tabela unicode
console.log(escola.indexOf('3')) //Indice relacionado ao núemro da palavra

console.log(escola.substring(1)) //Lê a palavra a partir de tal posição
console.log(escola.substring(0,3)) // Inicia na posição 0 e vai até a posição 3, sem incluir a posição 3

console.log("Escola". concat(escola).concat("!")) //Pega uma palavra e relaciona ela com a palavra definida na constante (concatenado)
console.log("Escola" + escola + "!") //Outra forma de concatenar
console.log(escola.replace('o', 'e')) //Subustitui a letra ou número pela letra definidan (para número não precisa do ' ')
console.log(escola.replace(/\d/, 'e')) //Subustitui todos os números pela letra definida
console.log(escola.replace(/\w/g, 'e')) //Substitui pela letra a primeira palavra." /\w/g " - (g: flag global) substitui tudo pela letra definida

console.log("Ana,Maria,Pedro".split (",")) //Separa/quebra a string em 3 array a partir da vírgula