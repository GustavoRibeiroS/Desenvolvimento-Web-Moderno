class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{  //defnindo que uma classe há outra classe como protótipo
    constructor(sobrenome, profissão = 'Professor'){
        super(sobrenome) //puxa a superclasse de avo
        this.profissão = profissão
    }
}

class Filho extends Pai{
    constructor(){
        super('Silva')
    }
}

const filho = new Filho
console.log(filho);