const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };

  const mageDamage = () => {
    const manaValue = mage.mana
    if (manaValue < 15) {
        return 'Não possui mana suficiente'
    } else {
        mage.mana -= 15
    const intelligence = mage.intelligence
    const buffIntelligence = intelligence * 2
    const newdamage = Math.floor(Math.random() * (intelligence - buffIntelligence + 1)) + buffIntelligence;
    mage.damage = newdamage
    return mage.damage
  }
}

module.exports = { mageDamage, mage }