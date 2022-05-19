let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); 
console.log('\n---- [ teste 2 ] ----\n');

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,,...numerosPares] = numerosPares
console.log(numerosPares); // [6, 8, 10, 12];