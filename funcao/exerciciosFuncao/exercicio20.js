function caixaEletronico(valorInformado) {
    let nota100 = 0;
    let nota50 = 0;
    let nota10= 0;
    let nota5 = 0;
    let nota1 = 0;
    let notasRetornadas = CalcularNotasRetornadas(valorInformado)
    
    while (valorInformado >= notasRetornadas) {
        switch (notasRetornadas) {
            case 100:
                valorInformado -= 100
                nota100++
                break;
                
            case 50:
                valorInformado -= 50
                nota50++
                break;
            
            case 10:    
                valorInformado -= 10
                nota10++
                break;    
            
            case 5:    
                valorInformado -= 5
                nota5++
                break;   
            
            case 1:     
                valorInformado -= 1
                nota1++
                break;   
        }
        notasRetornadas = CalcularNotasRetornadas(valorInformado)
    }
    return valorRetirado(nota100, nota50, nota10, nota5, nota1)
}

function CalcularNotasRetornadas(valorInformado) {
    if (valorInformado >= 100) {
        return 100
    } else if (valorInformado >= 50) {
        return 50
    } else if (valorInformado >= 10) {
        return 10
    }else if (valorInformado >= 5) {
        return 5
    }else if (valorInformado >= 1) {
        return 1
    }
} 

function valorRetirado(nota100, nota50, nota10, nota5, nota1) {
    let retirado = ''
    if (nota100 > 0) {
        retirado += `${nota100} nota(s) de R$100; `;
    }
    if (nota50 > 0) {
        retirado += `${nota50} nota(s) de R$50; `;
    }    
    if (nota10 > 0) {
        retirado += `${nota10} nota(s) de R$10; `;
    }    
    if (nota5 > 0) {
        retirado += `${nota5} nota(s) de R$5; `;
    }    
    if (nota1 > 0) {
        retirado += `${nota1} nota(s) de R$1; `;
    }
    return console.log(retirado); 
}

caixaEletronico(153)
caixaEletronico(100)
caixaEletronico(67)