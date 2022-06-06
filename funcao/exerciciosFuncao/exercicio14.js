function barracaDeFrutas(fruta) { 
    switch (fruta) {
        case 'maçã':
            console.log("Não vendemos esta fruta aqui");
            break;
        case 'kiwi':
            console.log("Estamos com Escassez de Kiwi");
            break;
        case 'melancia':
            console.log("Aqui está, são R$3 reais o quilo");
            break;
                
        default:
            console.log("Erro, fruta desconhecia por esta barraquinha humilde");
            break;
    }
}
barracaDeFrutas("maçã")
barracaDeFrutas("kiwi")
barracaDeFrutas("melancia")
barracaDeFrutas("pêra")
