function aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula("Bem vindo", 123)
const aula2 = new aula("Até Breve", 456)
console.log(aula1,aula2);

// Simulando o new

function novo (f, ...param) {
    const obj = {}
    obj.__proto__ = f.prototype //associou o proto ao prototype da função
    f.apply(obj, param) //executa a função f passando o objeto (13) e passando os parametros a serem passados
    return obj
}
const aula3 = novo (aula, "Até Breve", 123)
const aula4 = novo (aula, "Até Breve", 456)
console.log(aula3,aula4);
