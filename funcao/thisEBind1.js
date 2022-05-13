const pessoa = {
    saudacao: "Olá, bom dia!",
    falar(){
        console.log(this.saudacao);
    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // O fato de armazenar uma função em uma variável, não está chamando a função falar a partir do contexto pessoa, quando é chmado apenas falar ele está em um contexto diferente. UNDEFINED

const falarDePessoa = pessoa.falar.bind(pessoa) //bind é o responsável por amarrar o método um objeto para ele ser o dono da exucução quando o metodo for chamado.
falarDePessoa()