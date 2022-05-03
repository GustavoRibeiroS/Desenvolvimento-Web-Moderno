// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b );
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7,8)
imprimirSoma()

//Função com retorno
function soma(a, b = 1) {
    return a + b    
}

console.log(soma(2, 3));
console.log(soma(2)); //Quando não passa um valor para a outra variável ele considera o parametro passado, no caso, = 1
console.log(soma()); // Tenta somar o undefined do "a" que não foi declarado, com o parametro passado =1, gerando um Not a Number