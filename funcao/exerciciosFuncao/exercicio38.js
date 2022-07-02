function imprimirImpares(inicio = 0 , fim = 100) {
    if (inicio > fim ) {
        inicio = fim + inicio
        fim = inicio - fim
        inicio = inicio - fim        
    }

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
        
    }
}
imprimirImpares(19, 3)
console.log("---------");
imprimirImpares(10, 20)
console.log("---------");
imprimirImpares(18, 8)
