function Pessoa() {
    this.idade = 0


    setInterval(() => { 
    this.idade++
    console.log(this.idade) //this fixo, por já estar armazenado em uma constante
},1000)
}
new Pessoa