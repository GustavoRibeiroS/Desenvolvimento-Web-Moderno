let dobro = function(a) {
    return 2 * a
}
console.log(dobro(3));

dobro = (a) =>{
    return 2 * a
}
console.log(dobro(5));

dobro = a => 2 * a 

console.log(dobro(Math.PI)); 

ola = () => 'Olá'
ola = _ => 'Olá' //possui um parâmetro, mas pode ignorar se quiser
console.log(ola());