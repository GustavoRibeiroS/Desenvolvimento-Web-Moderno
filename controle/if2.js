function teste1(num) {
    if (num > 7)
        console.log(num); //Se não colocar chaves apenas uma sentença estará alocada ao if
        
        console.log("final");

}
teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7) ; { //Irá imprimir o ; pois estará colocando o ; como a sentença de código
        console.log(num);
    }
}

teste2(6)
teste2(9)