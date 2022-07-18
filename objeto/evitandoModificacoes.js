// Object.preventExtensions
const produto = Object.preventExtensions({      //não pode adicionar atributos
    nome: "Qualquer", preco: 1.33, tag: "Promoção"
}) 

produto.nome = "Borracha"
produto.descricao = "Material escolar borracha" //não foi adicionado
delete produto.tag
console.log(produto);

// Object.seal
const pessoa ={ nome: "Ana", idade: 25 }
Object.seal(pessoa) //não pode adicionar, nem excluir atributos do objeto, mas pode modificar os valores existentes

pessoa.sobrenome = "Pessoa" //não foi adicionado
delete pessoa.nome //não foi possível deletar
pessoa.idade = 28
console.log(pessoa);

// Object.freeze - não é possível excluir, adicionar, nem modificar os atributos