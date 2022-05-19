/*class Pessoa {
    constructor (nome){
        this.nome = nome;
    }
    falar(){
        console.log(`Este é meu nome ${this.nome}`)
    }
}*/

function Pessoa(nome) {
    this.nome = nome

    this.falar= function(){
        console.log(`Este é meu nome ${this.nome}`)
    }
}

const p1 = new Pessoa("João")
p1.falar()