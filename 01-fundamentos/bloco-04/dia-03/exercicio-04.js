let biggestPrimeNum = 0;

for (let i = 0; i <= 50; i += 1) {
  let prime = true;
  for (let j = 2; j < i; j += 1) {
    if (i % j === 0) {
      prime = false; 
    }
  }
  if (prime) {
    biggestPrimeNum = i;
  }
}

console.log(biggestPrimeNum);