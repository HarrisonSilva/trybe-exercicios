let fruits = [3, 4, 10, 1, 12];
let sumNumbers = 0
for (let i = 0; i < fruits.length; i += 1) {
    sumNumbers += fruits[i]
}
if (sumNumbers > 15) {
    console.log(sumNumbers);
} else {
    console.log("valor menor que 16");
}