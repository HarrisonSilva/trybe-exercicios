/* const numero1 = 25;
const numero2 = 10;

let adicao = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let modulo = numero1 % numero2;
console.log(adicao);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(modulo);
 */

const numero1 = 7700;
const numero2 = 9310;
const numero3 = 10000;

if (numero1 > numero2 && numero1 > numero3) {
   console.log(numero1, "e Maior que", numero2, "e tambem Maior que", numero3);

} else if (numero2 > numero1 && numero2 > numero3) {
   console.log(numero2, "e Maior que", numero1, "e tambem Maior que", numero3);

} else if (numero3 > numero1 && numero3 > numero2) {
   console.log(numero3, "e Maior que", numero1, "e tambem Maior que", numero2);
}