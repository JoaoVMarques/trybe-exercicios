let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (higherNumber < numbers[i]) {
    higherNumber = numbers[i];
  }
}
console.log(higherNumber);