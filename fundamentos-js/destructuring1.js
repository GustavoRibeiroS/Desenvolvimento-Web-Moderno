const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco: {
        logradouro: "Rua dos bobos",
        numero: 7
    }
}

console.log(pessoa);

const { nome, idade } = pessoa
console.log(nome, idade);

const { nome: n, idade: i } = pessoa
console.log(n, i);

const { sobrenome, humorBom = true } =  pessoa
console.log(sobrenome, humorBom);

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep);

//Quando se está desestruturando o objeto se usa {chaves}