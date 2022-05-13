const waked = () => 'Acordando!!';
const coffe = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (func) => {
  console.log(func());
}

doingThings(waked);
doingThings(coffe);
doingThings(sleep);