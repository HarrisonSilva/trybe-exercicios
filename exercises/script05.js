let value = 5
let square = ''

for (let i = 1; i <= value; i += 1) {
    for (let j = 1; j <= value; j += 1) {
        square += '*'
    }
    square += '\n'
}
console.log(square);

