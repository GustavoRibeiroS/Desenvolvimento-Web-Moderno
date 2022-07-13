const ferrari = {
    modelo: "F40",
    velMax: 320
}

const volvo = {
    modelo: "V40",
    velMax: 200
}

console.log(ferrari.__proto__); // .__proto__ (se a característica não for encontrada no objeto, busca no objeto pai com o comando .__proto__)
console.log(ferrari.__proto__ === Object.prototype); 
console.log(volvo.__proto__ === Object.prototype); // O atributo que referencia o protótipo de ferrari e volvo (__.proto__) representa o Object.prototype
console.log(Object.prototype.__proto__); //não há um protótipo mais alto do que o Object.prototype (pai)

function meuObjeto() {}
console.log(typeof Object, typeof meuObjeto);
console.log(Object.prototype, meuObjeto.prototype);