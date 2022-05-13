const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => (Math.floor(Math.random() * dragon.strength) + 15);
const warriosDamage = () => (Math.floor(Math.random() * warrior.strength * warrior.weaponDmg) + warrior.strength);
const mageSpell = () => ({
  damage: (Math.floor(Math.random() * mage.intelligence * 2) + mage.intelligence),
  manaCost: 15,
});

const mageDamage = (mageSpell) => {
  console.log(mage.mana);
  const manaCost = mageSpell.manaCost
  if (mage.mana >= manaCost) {
    mage.mana -= manaCost;
    return mageSpell.damage;
  }
  return 'Não possui mana suficiente';
}

const gameActions = {
  warrior: () => {
    warrior.damage = warriosDamage();
    dragon.healthPoints -= warrior.damage;
  },
  mage: () => {
    mage.damage = mageDamage(mageSpell());
    dragon.healthPoints -= mage.damage;
  },
  dragon: () => {
    dragon.damage = dragonDamage();
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },
  battleMembers: () => battleMembers,
}

console.log(gameActions.battleMembers());
console.log('-------------------------');
gameActions.warrior();
console.log(gameActions.battleMembers());
console.log('-------------------------');
gameActions.dragon();
console.log(gameActions.battleMembers());

