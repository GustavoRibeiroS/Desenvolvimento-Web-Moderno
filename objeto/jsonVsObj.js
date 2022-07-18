const obj = {a: 1, b:2, c: 3, soma(){return a + b + c} }
console.log(JSON.stringify(obj));

// console.log(JSON.parse("{a:1, b:2, c: 3")); Fail

console.log(JSON.parse('{"a":1, "b":2, "c": 3}')); // DEVE TER O FORMATO DE ASPAS SIMPLÊS E ASPAS DUPLAS e STRINGS TAMBÉM DEVEM TER ASPAS DUPLAS

console.log(JSON.parse('{"a":1.7, "b":"string", "c": true, "d": {}, "e": []}'))