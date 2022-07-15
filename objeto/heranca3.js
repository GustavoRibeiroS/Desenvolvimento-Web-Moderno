const pai = { nome: "Pedro", corCabelo: "castanho"}

const filha1 = Object.create(pai) //Localiza o atributo a partir do protótipo passado como parâmetro
filha1.nome = "Ana"
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true} //Atributos dentro de filha2, ainda tendo acesso as informações do pai. Não pode ser mudado. Pode ser listado
})

console.log(filha2.nome);
filha2.nome = "Carla" //não lido
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);


console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for (let key in filha2) {           //Forma para saber se o atrubuto veio por herança
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`);
}