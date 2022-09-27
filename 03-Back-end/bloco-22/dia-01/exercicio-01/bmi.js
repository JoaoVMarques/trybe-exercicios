const readline = require('readline-sync');

const BMI_MAX_AND_MIN = {
  'Underweight': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  },
};

function handleBMIResult(bmi) {
  const situacoes = Object.keys(BMI_MAX_AND_MIN);
  const resultFind = situacoes.find((situacao) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[situacao];
    return bmi >= minBMI && bmi <= maxBMI;
  });
  return resultFind;
}

function calculeBMI(weight, height) {
  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;
  return bmi;
}

function main() {
  const weightInKg = readline.questionFloat('What’ your weight? ')
  const heightInCm = readline.question('What’ your height? ')

  const bmi = calculeBMI(weightInKg, heightInCm).toFixed(2)
  const situation = handleBMIResult(bmi);

  console.log(`BMI: ${bmi}`);
  console.log(`Situação: ${situation}`)
}

main();