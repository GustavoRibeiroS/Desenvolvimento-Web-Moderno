const a = 1
const b = 2
const c = 3

const obj1 = {a : a, b : b, c: c}
const obj2 = {a, b, c}
console.log(obj1, obj2); // iguais, independente da forma escrita

const nomeAttr = 'Nota'
const valorAttr = 7.83

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3);

const obj4 = {[nomeAttr] : valorAttr}

console.log(obj4);

const obj5 = {
    funcao1 : function() {
        // ...
    }, 
    funcao2(){ //forma mais curta de definir uma função em obj
        // ...
    }
}
console.log(obj5);