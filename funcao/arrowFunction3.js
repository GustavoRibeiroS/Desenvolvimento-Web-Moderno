let comparaComThis = function (param) {
    console.log(this === param); //this é estritamente igual ao parametro que foi passado. Se atribuir um atributo ao this no corpo de uma função irá mudar o escopo global
}

comparaComThis(global)

const obj = {}
    comparaComThis = comparaComThis.bind(obj) //agora o this compara com o obj, não mais para o escopo global
    
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThis(global) //aponta para o arrow no módulo corrente


comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) //não funciona, pois o this continua apontando para o objeto no qual a função foi escrita/ O this de uma função arrow é associado ao contexto em que função arrow foi escrita
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)