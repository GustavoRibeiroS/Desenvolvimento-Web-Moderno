function tratarErroELancar(erro) { // 2) mensagem puxada do cath enquanto não ha tratativa do erro
    //throw new Error('...')
    //throw 10
    //throw true
    throw{ //Lançando o erro
        nome: erro.name,
        msg: erro.mensagem,
        date: new Date
    }
}

function imprimirNomeGritatdo(obj) {
    try{ // 1) colocar cóodigos que são potencialmente perigosos, caso ocorra erro cairá dentro do catch.
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e){
        tratarErroELancar(e)
    } finally { // 3) Sempre vai ser executato, mesmo que ocorra ou não erro no try
        console.log("Final");
    }
}

const obj = {nome : 'Roberto'} // correto-  const obj = {name : 'Roberto'}  -iá imprimir Roberto
imprimirNomeGritatdo(obj)