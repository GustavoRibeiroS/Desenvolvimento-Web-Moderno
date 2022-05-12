const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (const x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`); //Foi até o índice 5, quando chegou, interrompeu e saiu do laço
}

for(const y in nums){
    if (y == 5) {
        continue
    }
    console.log(`${y} = ${nums[y]}`); //Foi até o índice 5, pulou e continuou o laço de repetição
}

externo: 
for (a in nums){ //Não usar este tipo de estrutura for - for
    for (b in nums){
        if( a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`);
    }
}