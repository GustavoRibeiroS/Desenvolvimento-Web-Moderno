function Pessoa() {
    this.idade = 0

    const self = this //atribui a palavra this, para a constante self

    setInterval(function() {   // setInterval dispara uma outra função a partir de um intervalo que você passar
        self.idade++ // No o laço de repetição somando a 1 para idade
        console.log(self.idade);
    }/*.bind(this) */, 1000) // Intervalo declarado de 1000 milissegundos (a cada 1s a função será disparada)
}

new Pessoa