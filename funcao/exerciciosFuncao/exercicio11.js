function anoInforme(ano) {
    let isBissexto = true
    let notBissexto = false

    if(ano <=0){
       console.log(`${notBissexto}`)
    }else if (ano % 400 == 0) {
        console.log(`${isBissexto}`)
    }else if (ano % 100 == 0){
        console.log(`${notBissexto}`)
    }else if (ano % 4 == 0){
            console.log(`${isBissexto}`)
    }else{
        console.log(`${notBissexto}`)
    }
}
anoInforme(0)
anoInforme(4)
anoInforme(100)
anoInforme(400)
anoInforme(800)
anoInforme(2020)
anoInforme(2021)