// coleção dinamica de pares chave/valor
const produto = new Object
produto.nome = "Cadeira"
produto['marca do produto'] = "Generica"
produto.preco = 220

console.log(produto);
delete produto.nome
delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo : 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Jair',
        idade: 31,
        endereco: {
            logradouro: "Rua ABC",
            numero: 21
        }
    },
    condutores: [{nome: 'Junior', idade: 19}, {
        nome: "Ana", idade: 48
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'
console.log(carro);

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro);
console.log(carro.condutores); //como já foi apagado ele retorna undefined
// console.log(carro.condutores.length); é possivel verificar o tamanho do arrey (numero de condutores) se não deletar p carro.condutores