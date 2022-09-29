const fs = require('fs').promises;

async function readFile(fileName) {
  const fileContent = await fs.readFile(`./${fileName}.json`, 'utf-8');
  const simpsons = JSON.parse(fileContent);
  return simpsons;
}

async function readAll() {
  const simpsons = await readFile('simpsons');
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

async function main() {
  await readAll();
  // await getById(4);
  await filterSimpsons();
  // await writeSimpsonsFIle();
  // await addCharacter();
  await replaceNelson();
}

async function getById(id) {
  const simpsons = await readFile('simpsons');
  const chooseSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if(!chooseSimpson) {
    throw new Error('id não encontrado');
  }
  console.log(chooseSimpson);
}

async function filterSimpsons() {
  const simpsons = await readFile('simpsons');
  const filteredSimpsons = simpsons.filter((simpson) => simpson.id !== '6' && simpson.id !== '10')
  await fs.writeFile('./simpsons.json', JSON.stringify(filteredSimpsons));
}

async function writeSimpsonsFIle() {
  const simpsons = await readFile('simpsons');
  const filterSimpsons = simpsons.filter((simpson) => Number(simpson.id) < 5);
  await fs.writeFile('simpsonFamily.json', JSON.stringify(filterSimpsons));
}

async function addCharacter() {
  const simpson = await readFile('simpsonFamily');
  simpson.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('simpsonFamily.json', JSON.stringify(simpson));
}

async function replaceNelson() {
  const simpson = await readFile('simpsonFamily');
  const filteredSimpsons = simpson.filter((simpson) => simpson.id !== '8');
  filteredSimpsons.push({ id: '15', name: 'Maggie Simpson' });
  await fs.writeFile('simpsonFamily.json', JSON.stringify(filteredSimpsons));
} 

main();