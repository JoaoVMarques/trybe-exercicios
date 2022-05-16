const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// 1 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.
people.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

console.log(people);

people.sort(function (a, b) {
  if (a.age > b.age) {
    return -1;
  }
  if (a.age < b.age) {
    return 1;
  }
  // a must be equal to b
  return 0;
});

console.log(people);