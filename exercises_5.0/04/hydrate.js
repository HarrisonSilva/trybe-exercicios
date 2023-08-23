const hydrate = (drink) => {
  const drinksArray = drink.split(", ")
  let numbersDrinks = 0
    for (let i = 0; i < drinksArray.length; i += 1) {
     let drinkItem = drinksArray[i]
     const number = parseInt(drinkItem, 10);
      if (!isNaN(number)) {
        numbersDrinks += number
      }
    }
     return `${numbersDrinks} copo de água`;
}

console.log(hydrate('1 coca, 3 cervejas'));

module.exports = hydrate

