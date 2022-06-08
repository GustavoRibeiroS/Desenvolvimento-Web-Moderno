function cardapio(codigo,quantidade) {
    switch (codigo) {
        case 100:
            return console.log(`O valor a ser pago por ${quantidade} Cachorro Quente é: ${quantidade * 3.00}`);
        case 200:
            return console.log(`O valor a ser pago por ${quantidade} Hamburguer Simples é: ${quantidade * 4.00}`); 
        case 300:
            return console.log(`O valor a ser pago por ${quantidade} Cheeseburguer é: ${quantidade * 5.50}`); 
        case 400:
            return console.log(`O valor a ser pago por ${quantidade} Bauru é : ${quantidade * 7.50}`); 
        case 500:
            return console.log(`O valor a ser pago por ${quantidade} Refrigerante é: ${quantidade * 3.50}`); 
        case 600:
            return console.log(`O valor a ser pago por ${quantidade} Suco é: ${quantidade * 2.80}`);

        default:
            console.log("Produto não existente");
            break;
    }
}
cardapio(100,2)
cardapio(200,4)
cardapio(300,5)
cardapio(400,3)
cardapio(500,6)
cardapio(600,1)
cardapio(650,2)