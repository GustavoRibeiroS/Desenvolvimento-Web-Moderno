function planoSaude(idade) {
    const valorFixo = 100
    if (idade <= 9) {
        return console.log( valorFixo + 80);
        
    }else if (idade >= 10 && idade <=30) {
        return console.log( valorFixo + 50);

    }else if (idade >=31 && idade <=60) {
        return console.log(valorFixo + 95);

    }else if(idade >=61){
        return console.log(valorFixo + 130);
    }
}
planoSaude(8)
planoSaude(28)
planoSaude(30)
planoSaude(37)
planoSaude(78)