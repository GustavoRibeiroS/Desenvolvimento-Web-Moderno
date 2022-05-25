function tipoTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) {
        console.log("Este triângulo é Equilátero: Todos os lados são iguais");
    }else if (ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
        console.log("Este triângulo é Isóceles: Possui 2 lados iguais");
    }else{
        console.log("Este triângulo é Escaleno: Possui todos os lados são diferentes");
    }
}

tipoTriangulo(3,3,3)
tipoTriangulo(3,3,2)
tipoTriangulo(1,2,3);