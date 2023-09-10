const toObject = (cars) => {
    const newCar = {}
    newCar.car = cars[0]
    newCar.brand = cars[1]
    newCar.year = cars[2]
    return newCar
}

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];
console.log(toObject(palio));
console.log(toObject(shelbyCobra));
console.log(toObject(chiron));
