class Lancamento{
    constructor(nome = 'Genérico', valor= 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] //concatenará todos os lançamentos no arrey
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l)) //percorre o arrey e da um push nos objetos
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach (l=>{ valorConsolidado += l.valor})
        
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220) //débito, valor negativo

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario,contaDeLuz)

console.log(contas.sumario());