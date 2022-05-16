const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((searchName) => searchName == name);

console.log(hasName(names, 'Ana'))