function criarProduto(nome, preco){
    return{
    nome, preco, desconto: 0.1
}
}
console.log(criarProduto("Pomada", 23,))
console.log(criarProduto("Notebook", 2399))