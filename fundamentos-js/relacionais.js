console.log('01)', '1' == 1); //valor 1 é iagual a valor 1 = true
console.log('02)', '1' === 1); //número 1 (sting) é igual a numero 1 (number) = false
console.log('03)', '3' != 3); // valor 3 é diferente de valor 3 =  false, pois são iguais
console.log('04)', '3' !== 3); // número 3 (string) é diferente de valor 3 (number) =  true, pois são diferentes

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2); //comparando endereó de memoria, então são diferentes
console.log('10)', d1 == d2);
console.log('11)', d1.getTime() === d2.getTime()); //São verdadeiros pois tem o mesmo tipo e mesmo valor

console.log('12)', undefined == null);
console.log('13)', undefined === null);