function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__); //Ambos apontam para o mesmo objeto
console.log(MeuObjeto.prototype === obj1.__proto__ ); //Quando se cria um objeto com uma função construtora o objeto aponta para função.prototype

MeuObjeto.prototype.nome = 'Almir' //Definido um atributo pai (pai)
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`);    
}
obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = "Obj3"
obj3.falar()