let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

const arrayOfNumbers = (array) => {
    let unpackingValues = []
    for (let i = 0; i < array.length; i += 1) {
        const interValue = array[i]
       for (let j = 0; j < interValue.length; j += 1) {
           const element = interValue[j]
           if (element % 2 === 0) {
               unpackingValues.push(element)
           }
        }
    }
    return unpackingValues
}
console.log(arrayOfNumbers(vector));