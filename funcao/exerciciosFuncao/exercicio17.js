function AumentoSalarial(plano, salarioAtual) {
    switch (plano) {
        case "A":
            return console.log(salarioAtual + (salarioAtual * 0.10)); 
        case "B":
            return console.log(salarioAtual + (salarioAtual * 0.15)); 
        case "C":
            return console.log(salarioAtual + (salarioAtual * 0.20));             
        default:
            console.log("Plano Inválido");
            break;
    }
}
AumentoSalarial("A", 1000)
AumentoSalarial("B", 1000)
AumentoSalarial("C", 1000)
AumentoSalarial("F", 1000)