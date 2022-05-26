function bhaskara(a, b, c) {
    let valorDelta = (b ** 2) - (4 * a * c)
    if (valorDelta < 0) {
    return console.log("Delta Negativo");
}
    let vetor1 = (-b + valorDelta)/(2*a)
    let vetor2 = (-b - valorDelta)/(2*a)
    valores = [vetor1, vetor2]
    return console.log(valores); 
}
bhaskara(1, 3, 2)
bhaskara(3, 1, 2)