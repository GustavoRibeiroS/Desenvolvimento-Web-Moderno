function getComDesconto(){
    return `${this.preco * (1 - this.desc)}`
}

const prod1 = {
    nome: "Palmolive",
    preco: 43,
    desc: 0.1,
    getComDesconto
}

console.log(prod1.getComDesconto())

const pomarola = {preco: 20, desc: 0.2}
console.log(getComDesconto.call(pomarola));