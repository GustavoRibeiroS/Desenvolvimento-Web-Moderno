function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`    
}

const produto = {
    nome: "Notebook",
    preco: 4589,
    desc: 0.15,
    getPreco
}

/*global.preco = 20
global.desc = 0.1
console.log(getPreco())*/

console.log(produto.getPreco());

const carro = {preco: 49990, desc: 0.20}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro)); //mesmo parâmetro para chamar

console.log(getPreco.call(carro, 0.17, '$')); //primeiro contexto, depois os parâmetros que ele irá passar
console.log(getPreco.apply(carro, [0.17, '$'])); // no aplly ele deve estra dentro de um arrey

