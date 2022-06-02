function reconheceNumero(numero) {
    if (numero % 3 == 0) {
        console.log(`O número: ${numero} é diviível por 3 = TRUE`);
    } else {
        console.log(`O número: ${numero} não é diviível por 3 = FALSE`);

    }
}
reconheceNumero(3)
reconheceNumero(2)
reconheceNumero(150)
reconheceNumero(5)
reconheceNumero(6)
reconheceNumero(9)

//Outra forma

function reconheceNumeroNovamente(numeroRef) {
    let divisivel = true;
    let naoDivisivel = false;

    if (numeroRef % 3 == 0) {
        console.log(`${divisivel}`);
    } else {
        console.log(`${naoDivisivel}`);

    }
}
reconheceNumeroNovamente(3)
reconheceNumeroNovamente(2)
reconheceNumeroNovamente(150)
reconheceNumeroNovamente(5)
reconheceNumeroNovamente(6)
reconheceNumeroNovamente(9)