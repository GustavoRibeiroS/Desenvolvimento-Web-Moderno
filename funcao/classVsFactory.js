class Pessoa {
    constructor (nome){
        this.nome = nome;
    }
    falar(){
        console.log(`Este é meu nome ${this.nome}`)
    }
}

const p1 = new Pessoa("João")
p1.falar()

const CriarPessoa = nome => {
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}
const p2 = CriarPessoa("Thiago")
p2.falar()