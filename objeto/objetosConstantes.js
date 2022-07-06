// a variável pessoa aponta para um endereço de memória
//Ex: pessoa -> 123 -> {...}
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa);

// pessoa -> 456 -> {...} 
// pessoa = {nome: 'Ana'} (o que dá erro, uma vez que está atribuindo um novo endereço de memoria para pessoa, uma const)

Object.freeze(pessoa) //método em que congela o objeto, não consegue mexer no objeto

pessoa.nome = 'Maria'
delete pessoa.nome
console.log(pessoa.nome); // o nome do objeto continua sendo Pedro
console.log(pessoa); // também não é possível deletar o objeto, o objeto passa a ser uma constante

const pessoaConstante = Object.freeze({nome : 'Pablo'}) //Definindo direto o objeto como uma constante
console.log(pessoaConstante);