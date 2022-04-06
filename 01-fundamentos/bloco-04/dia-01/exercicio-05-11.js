let aliquotINSS;
let aliquotIR;
const salary = 3000;

// Inss aliquot percentage based in salary
if (salary <= 1556.94) {
  aliquotINSS = salary * 0.08;
}
else if (salary <= 2594.92) {
  aliquotINSS = salary * 0.09;
}
else if (salary <= 5189.82) {
  aliquotINSS = salary * 0.11;
}
else {
  aliquotINSS = salary * 570.88;
}

const baseSalary = salary - aliquotINSS;

// calcule aliquotIR (baseSAlary * percentage) - taxes
if (baseSalary <= 1903.98) {
  aliquotIR = 0;
}
else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80
}
else if (baseSalary <= 3751.05) {
  aliquotINSS = (baseSalary * 0.15) - 354.80
}
else if (baseSalary <= 3664.68) {
  aliquotINSS = (baseSalary * 0.225) - 636.13
}
else {
  aliquotINSS = (baseSalary * 0.275) - 869.36
}

console.log(baseSalary - aliquotIR)