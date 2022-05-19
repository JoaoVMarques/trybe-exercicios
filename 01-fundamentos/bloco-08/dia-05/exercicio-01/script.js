// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morgango', 'Uva', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['kiwi', 'Pera', 'Melancia'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

console.log(fruitSalad(specialFruit, additionalItens));