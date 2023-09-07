
const sumNumbers = ( ...inters) => {
    const [ ...numbers] = inters
   return numbers.reduce((acc, curr) => acc + curr)
}
console.log(sumNumbers(4, 5, 6, 9, 50, 922));
