let a = 79;
let b = 1;
let c = 100;
let final = a + b + c; 

// Check if all 3 angles are positives
let finalPositiveAngle = a > 0 && b > 0 && c > 0;

// Check if all 3 angles are positives 
if (finalPositiveAngle) {
  // Check if all 3 lets return total of 180
  if (final === 180) {
    console.log(true);
  }
  else {
    console.log(false);
  }
  
}
else {
  console.log("Erro! Angulo inválido")
}