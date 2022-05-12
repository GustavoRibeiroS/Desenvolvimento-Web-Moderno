let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`);
    contador++ //acrescenta uma unidade ao contador até chegar 10 e a condição virar falsa
}

for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`);
}

const notas = [ 6.7, 7.4, 9.8, 8.1, 7.7]
for ( let i = 0; i < notas.length; i++) { //length é o comando para medir o comprimento do arrey, para que ele percorra o arrey declarado. (No códico ele "diz": inicie na posição 0; vá até o i menor (<) do que o tamano do arrey; e acrescenta uma unidade ao valor de i (i++) )
    console.log(`notas = ${notas[i]}`);
}

// console.log(i); Se tirar o o let do i ele irá printar além das posições percorridas a quantidade de elementos no arrey