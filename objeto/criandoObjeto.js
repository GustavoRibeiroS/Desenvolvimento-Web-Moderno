//Criando objetos usando função literal
const obj1 = {}
console.log(obj1);

//Object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object
console.log(obj2);

//Funçãoes construtoras
function Produto(nome, preco, desc) {
    this.nome = nome //privado na função
    this.getPrecoComDesconto = () => { 
        return preco * (1 - desc)
    }
}
const prod1 = new Produto ('Caneta', 7.99, 0.15) //pode alterar o nome do produto, mas o preco não por estar disponível apenas no escopo da função
const prod2 = new Produto ('Notebook', 2998.99, 0.25)
console.log(prod1.getPrecoComDesconto(), prod2.getPrecoComDesconto());

//função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase/30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario());

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//função que famosa que recebe objeto...
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info);