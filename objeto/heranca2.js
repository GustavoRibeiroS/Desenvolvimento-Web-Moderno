// Cadeia de protótipos (prototype chain)
const avo = { attr1: "A" }
const pai = { __proto__: avo, attr2: "B", attr3: "3" }
const filho = { __proto__: pai, attr3: "C" }

console.log(filho.attr1, filho.attr2, filho.attr3); //apesar de ter o attr3 no pai, ele mantém o do filho pois já encontrou
console.log(filho.attr0);// Se o atributo não estiver no avo (referenciado como principal "pai", gera Undefined)

Object.prototype.attr0 = 'Z' //NÃO RECOMENDADO
console.log(filho.attr0); // O avo apondando para Object.prototype gera o atributo Z

const carro = {
    velAtual: 0,
    velMax: 200,

    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.modelo}: ${this.velAtual} Km/h de ${this.velMax}`
    }
}

const ferrari = {
    modelo: "F40",
    velMax: 324 //shadowing (sombreia/substitui o valor predefinido do objeto)
}

const volvo = {
    modelo: "V40",
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari,carro) //função que estabelece a relação de protótipo entre dois objetos
Object.setPrototypeOf(volvo,carro)

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100)
console.log(volvo.status());

ferrari.acelerarMais(300)
console.log(ferrari.status());