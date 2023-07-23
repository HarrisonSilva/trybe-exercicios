const sumNumbers = (a, b, o) => {
    if (o === 'adicao') {
       console.log(a + b)
    }
    if (o === 'subtracao') {
        console.log(a - b)
     }
     if (o === 'multiplicacao') {
        console.log(a * b)
     }
     if (o === 'divisao') {
        console.log(a / b)
     }
     if (o === 'modulo') {
        console.log(a % b)
     }
}

sumNumbers(10, 10, 'adicao')