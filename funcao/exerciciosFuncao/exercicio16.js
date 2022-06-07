function calculadora(valor1, operacao, valor2) {
        switch (operacao) {
        case "+":
            return console.log(valor1 + valor2);
        case "-":
            return console.log(valor1 - valor2);
        case "*":
            return console.log(valor1 * valor2);
        case "/":
            return console.log(valor1 / valor2);
    
        default:
            console.log("Operação inválida");
            break;
    }
}
calculadora(4,'+',2)
calculadora(4,'-',2)
calculadora(4,'*',2)
calculadora(4,'/',2)
calculadora(4,'%',2)