// Função em JS é first-class Object (citzens)
// Higher-order function

// criar de forma literal
function fun1() {

}

// Armazenar em uma variável
const fun2 = function (){
    //se chamar o nome da constante ele vai invocar a função
}

// Armazenar em um arrey
const arrey = [function (a, b) {return a + b}, fun1, fun2]
console.log(arrey [0] (2, 3));

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
    return "Opa"
}
console.log(obj.falar());

// Passar a função como parâmetro
function run(fun) {
    fun()
}
run(function() {console.log("Executando");})

// Função pode retornar/conter uma função
function soma(a,b) {
    return function (c) {
        console.log(a + b + c);
    }
}

soma (2,3)(4)
const cincoSoma = soma(2,3)
cincoSoma(4)