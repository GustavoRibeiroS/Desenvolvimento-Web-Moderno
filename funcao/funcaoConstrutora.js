function Carro(velocidadeMaxima = 200, delta = 5) { // delta = aceleração padrão do carro 5 em 5
    //atributo privado
    let velocidadeAtual = 0 //variável privada

    //método público
    this.acelerar = function () { //o método pode ser chamado fora da função
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta //Se ainda não estiver na velocidade máxima, pode acrescentar o delta
        }else{
            velocidadeAtual = velocidadeMaxima //Se não for possível acrescentar o delta ele já está na máxima
        }
    }

    // metodo publuco
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()//+20
ferrari.acelerar()//+20
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);