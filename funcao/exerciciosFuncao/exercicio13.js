function diaSemana(dia) {

    switch (dia) {
        case 1:
        case 7:
        return "Final de semana"           

        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        return "Dia Útil"

        default:
            return "Dia Inválido"
    }
}

console.log(diaSemana(1));
console.log(diaSemana(4));
console.log(diaSemana(7));
console.log(diaSemana(17));
console.log(diaSemana('u'));