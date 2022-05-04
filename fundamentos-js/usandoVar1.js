{
    {
        {
            {
                var sera = "Será???"
                console.log(sera);
            }
        }
    }
}

console.log(sera); //fora do bloco que não é uma função a variável fica visivel

function teste() { // criando uma variáver var dentro do escopo de uma function, ela só é visivel dentro da function
    var local = 123
    console.log(local)
}

teste()
//console.log(local) //não é possível acessar a variável pois está fora da função