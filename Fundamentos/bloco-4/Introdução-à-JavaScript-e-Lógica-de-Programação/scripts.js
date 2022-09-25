const numero1 = 100;
const numero2 = 60;
const numero3 = 20;
let soma = numero1 + numero2 + numero3;
let verificacao = numero1 > 0 && numero2 > 0 && numero3 > 0;

if (verificacao) {
    if (soma === 180) {
    console.log(true);
} else {
    console.log(false);
};
} else {
    console.log("Numero invalido");
}