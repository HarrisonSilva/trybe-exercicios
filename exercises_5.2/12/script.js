  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };



  const dragonDamage = () => {
    const strength = dragon.strength
    const newdamage = Math.floor(Math.random() * (strength - 15 + 1)) + 15;
    dragon.damage = newdamage
    return dragon.damage
  }
  
module.exports = { dragonDamage, dragon }