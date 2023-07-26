let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
const arrayMultiplied = []

for (let i = 1; i < numbers.length; i += 1) {
    for (let j = i - 1; j < i; j += 1) {
        arrayMultiplied.push(numbers[i] * numbers[j])
    }
}
console.log(arrayMultiplied);
