/*
function encontrePar(n) {
    let numerosPares = []
    for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
        numerosPares.push(i)
    }
    }
    return numerosPares
}
console.log(encontrePar(100));
*/

function acharPares () {
    for (let i = 1; i <= 100; i++){
        if (i%2==0) {
            console.log(i)
        }
    }
}

acharPares()