const firstNumber = 19
const twoNumber = 20
const threeNumber = 5

if (firstNumber > twoNumber && firstNumber > threeNumber) {
    console.log(firstNumber, 'e maior que', twoNumber, 'e tambem que', threeNumber)
} else if(twoNumber > firstNumber && twoNumber > threeNumber) {
    console.log(twoNumber, 'e maior que', firstNumber, 'e tambem que', threeNumber)
} else {
    console.log(threeNumber, 'e maior que', firstNumber, 'e tambem que', twoNumber);
}

