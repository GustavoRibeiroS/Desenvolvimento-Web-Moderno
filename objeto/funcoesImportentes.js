const pessoa = {
    nome: "Rebeca",
    idade: 4,
    peso: 15
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa)); //arrey de chave e valor

Object.entries(pessoa).forEach(e => { //pelo forEach percorre os elementos "e" do arrey
    console.log(`${e[0]} : ${e[1]}`); //Retorna o elemento 0 e 1 de cada arrey
})

// Usando Destructuring

Object.entries(pessoa).forEach(([chave , valor]) => { //forEach percorre os elementos com um operador e aplica o destructuring "chave e valor"
    console.log(`${chave} : ${valor}`); //Retorna o elemento 0 e 1 de cada arrey
})

Object.defineProperty(pessoa, 'dataNascimento', { //Definindo a propriedade
    enumerable: true, // Pode ser listada (no Object.keys)
    writable: false, //Não pode ser modificada
    value: '01/05/2015'
})

pessoa.dataNascimento = '25/12/2018' //Não alterado
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assaing
const dest = {a : 1}
const o1 = {b : 2}
const o2 = {c : 3, a : 4}
const obj = Object.assign(dest, o1, o2) //vai integrar todos os atributos passados para o objeto destinado (Podendo sobrescrever os valores)
console.log(obj);