function compras(trabalho1, trabalho2) {
    const compararSortvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwuse xor (ou exclusivo)
    const comprarTv32 = trabalho1 != trabalho2 //ou exclusivo . ("Estritamente se for diferente do igual")
    const manterSaudavel = !compararSortvete //operador unário
     
    return {compararSortvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false,false));