let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddQntd = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    oddQntd++;
  }
}

if (oddQntd === 0) {
  console.log("nenhum valor ímpar encontrado");
}
else {
  console.log(oddQntd);
}