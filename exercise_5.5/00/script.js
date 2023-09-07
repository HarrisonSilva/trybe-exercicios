
const specialFruit = ['Maça', 'Banana', 'Morango'];

const additionalItens = ['Leite Condensado', 'Leite', 'Chocolate'];

const fruitSalad = (fruit, additional) => {
    const fruits = [ ...fruit, ...additional]
    return fruits
};

console.log(fruitSalad(specialFruit, additionalItens));