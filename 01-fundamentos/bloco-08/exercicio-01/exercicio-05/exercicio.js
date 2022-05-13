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
  const manaCost = mageSpell.manaCost
  if (mage.mana >= manaCost) {
    mage.mana -= manaCost;
    return mageSpell.damage;
  }
  return 'Não possui mana suficiente';
}

for (let i = 0; i < 20; i += 1) {
  console.log('-------')
  console.log('Dano:' + mageDamage(mageSpell()));
  console.log('Mana:' + mage.mana);
}
