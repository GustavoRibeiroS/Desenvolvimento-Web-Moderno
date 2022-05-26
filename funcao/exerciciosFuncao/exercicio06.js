function jurosSimples(capitalInicial, taxaJuros, tempo) {
    return capitalInicial + (capitalInicial * (taxaJuros * 0.1) * tempo)
    
}
function jurosComposto(capitalInicial, taxaJuros, tempo) {
    Montante = capitalInicial * (1 + (taxaJuros * 0.1)) ** tempo
    return Montante.toFixed(2)
}

console.log(jurosSimples(100, 1, 2));
console.log(jurosComposto(100, 1, 2));