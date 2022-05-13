function Pessoa() {
    this.idade = 0

    const self = this //atribui a palavra this, para a constante self

    setInterval(function() {   //Dispara uma outra função a partir de outro intervalo que você passou
        self.idade++ //cria o laço de repetição somando a 1 para idade
        console.log(self.idade);
    }/*.bind(this) */, 1000) // Intervalo de 1000 mili segundos (a cada 1s a função será disparada)
}

new Pessoa