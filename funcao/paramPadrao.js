// Estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1 
    b = b || 1
    c = c || 1
    return a + b + c; 
}

console.log(soma1(), soma1(3), soma1 (1, 2, 3), soma1(0, 0, 0));

// Estratégia 2, 3, 4
function soma2(a, b, c) {
    a = a !== undefined ? a : 1  // Se "a" for diferente (!==) de undefined ele pega o valor informado e atribuí ao "a", [(?) para expressão de caso seja] caso seja undefined, irá pegar o valor de "a" e atribuir (:) o valor 1.
    b = 1 in arguments ? b : 1   // Se existir um segundo argumento para soma2 (no caso para "b"), pegar o argumento, (?) caso não, pegue o valor de "b" e atribuí (:) o valor 1. OBS: arguments pega a posição, ou seja, se for para colocar no "a" por Ex: a = 0 in arguments ?..
    c = isNaN(c) ? 1 : c         // Testanto se a variável "c" is Not a number, ou seja, se isNaN(c) for algo diferente de um número, (?) não é um número, atribuir o valor 1 a variável "c"
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0));

// Valor padrão do es2015
function soma3(a = 1, b = 1, c = 1) {
    return a + b + c    
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0));