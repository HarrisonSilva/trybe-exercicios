  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };

  const warriorDamage = () => {
    const strength = warrior.strength
    const weaponDmg = warrior.weaponDmg
    const buffDamage = strength * weaponDmg
    const newdamage = Math.floor(Math.random() * (strength - buffDamage + 1)) + buffDamage;
    warrior.damage = newdamage
    return warrior.damage
  }

module.exports = { warriorDamage, warrior }
