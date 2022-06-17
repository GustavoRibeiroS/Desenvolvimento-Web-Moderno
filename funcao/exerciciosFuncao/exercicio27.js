function calcularCrescimento(altura1, taxa1, altura2, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            return "A criança 1 será maior que a criança 2 em 1 ano"
        }
        else if (taxa2 > taxa1) {
            return "A criança 2 será maior que a criança 1 em 1 ano"
        }else{
            return "Ambas as crianças terão o mesmo tamanho"
        }
    }else{
        if (altura1 > altura2) {
            if (taxa1 >= taxa2) {
                return "A criança menor não ultrapassará a maior"
            }else{
                return `A criança menor será maior em ${tempoCrescimento(altura1,taxa1,altura2,taxa2)} anos`
            }
        }else{ //altura2 > altura1
            if (taxa2 >= taxa1) {
                return "A criança menor não ultrapassará a maior"
            }else{
                return `A crinaça menor será a maior em ${tempoCrescimento(altura1, taxa1, altura2, taxa2)} anos`
            }
        }
    }
}

function tempoCrescimento(alturaMenor, taxaMenor, alturaMaior, taxaMaior) {
    let qtAnos = 0
        while (alturaMenor < alturaMaior) {
            alturaMaior += taxaMaior
            alturaMenor += taxaMenor
            qtAnos ++
        }
        return qtAnos
}
console.log(calcularCrescimento(150,2,130,5));