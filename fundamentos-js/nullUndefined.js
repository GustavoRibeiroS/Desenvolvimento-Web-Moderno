let valor // Não inicializada, sem valor atribuído
console.log(valor);

valor = null //Ausência de valor, não aponta para nenhum local de memória -  A partir do momento que está nulo eu não posso acessar nenhuma função ou valor da variável que viera antes.
console.log(valor);

const produto = {} //não há o preço definido
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined //evitar atribuir undefinded, quando quiser limpar o valor de uma variável numérica colcoar 0, por ex.
console.log(!!produto.preco);
// delete produto.preco //para tirar o atributo de um objeto e transformar em undefined
console.log(produto);

produto.preco = null //produto está sem preço
console.log(!!produto.produto); //para descobrir de está setado, com valor, se der false esta nulo, sem lógica
console.log(produto);