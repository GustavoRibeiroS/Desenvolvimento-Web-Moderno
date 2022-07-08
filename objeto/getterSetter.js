const sequencia = {
    _valor: 1,  // _ é uma convenção (uma variavel pretendida ser acessada apenas internamente)
    get valor(/*como quer pegar o valor ão precisa de atributo*/) { return this._valor++ }, //pega o valor e gera um novo id.
    set valor(valor){
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor); // não retorna a sequencia por ter um valor menor do que o anterior
