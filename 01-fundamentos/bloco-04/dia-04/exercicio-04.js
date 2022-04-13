// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

let word = "arara"

function palindromeCheck(palindromo) {
  if (word === word.split("").reverse().join("")) {
    return true;
  }
  else {
    return false;
  }
}
console.log(palindromeCheck(word));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// let array = [2, 3, 6, 7, 10, 1]; 
// let higher = array[0];
// for (let i = 0; i < array.length; i += 1) {
//   if (higher < array[i]) {
//     higher = i;
//   }
// }
// console.log(higher);

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// let arrayLowest = [2, 4, 6, 7, 10, 0, -3];
// let lower = arrayLowest[0];
// for (let i = 0; i < arrayLowest.length; i += 1) {
//   if (higher > arrayLowest[i]) {
//     lower = i;
//   }
// }
// console.log(lower); 
// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// let biggerWord = "";

// for (let i = 0; i < names.length; i += 1) {
//   if (biggerWord.length < names[i].length) {
//     biggerWord = names[i];
//   }
// }

// console.log(biggerWord);

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// let loopArray = [2, 3, 2, 5, 8, 2, 3]
// let mostLoops = 0;
// let loops = 0;
// loopArray.sort();


// for (let i = 0; i < loopArray.length; i += 1) {
//   if (loopArray[i] === loopArray[i + 1]) {
//     loops
//   }
// }