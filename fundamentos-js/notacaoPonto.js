console.log(Math.ceil(6.1)); //Ceil = teto. Arredonda para cima

const obj1 ={}
obj1.nome = "Bola"
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome //this deixa o atributo publico, ou seja, pode ser instanciada fora da função
    this.exec = function() {
        console.log("Exec...");
    }

}

const Obj2 = new Obj("Cadeira")
const Obj3 = new Obj("Mesa")
console.log(Obj2.nome);
console.log(Obj3.nome);
Obj3.exec(); //Não foi necessário colcoar o console pois a função já chamou o console.log
Obj2.exec();  