let a = 7;
let b = 94;

console.log("Valor de a: " + a);
console.log("Valor de b: " + b);

//Depois da troca a = 94 e b =7

let temp = a; //Cria-se uma variável nova "Temporária", em que armazena o valor da variável
a = b;
b = temp;

console.log("Novo valor de a: " + b);
console.log("Novo valor de b: " + a);

[a, b] = [b, a];

console.log("Outra forma de mudar o valor novo de a: " + b);
console.log("Outra forma de mudar o valor novo de b: " + a);