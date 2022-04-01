const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores [0], valores [3]);
console.log(valores[4]);

valores[4] = 10 //está adicionando o valor 10 na posição 4
valores[7] = 8
console.log(valores);

console.log(valores.length); //número de elementos no array

valores.push({id: 3}, false, null, "teste") //inserir no array
console.log(valores);

console.log(valores.pop()); // pega o último valor do array e retira do array
delete valores[0] // deletou o peimiro valor do array
console.log(valores);

console.log(typeof valores); // Array é um object