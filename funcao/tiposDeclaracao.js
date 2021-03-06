console.log(soma(3, 4)); //o interpretador reconhece a função mesmo antes de ter teclarado

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4)); 


// nomead function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4)); // O fato de ter uma função nomeada pode ajudar na hora de localizar algum probelma