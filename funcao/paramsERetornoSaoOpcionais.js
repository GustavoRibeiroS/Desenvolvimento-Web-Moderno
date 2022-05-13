function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m².`);
    }else{
        return console.log(area); 
    }
}

area(2,4)
area(2)
area(9,9)
area()
area(2,3,17,22) //ignora os parâmetros adicionais e multiplica os 2 primeiros