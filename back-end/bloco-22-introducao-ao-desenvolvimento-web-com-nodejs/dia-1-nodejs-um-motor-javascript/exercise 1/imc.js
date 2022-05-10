const readline = require('readline-sync');

 const FIXED_WEIGHT = 65;
const FIXED_HEIGHT = 155;

function calcImc(weight, height) {
  console.log(`Weight: ${weight}, Height: ${height}`);
  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;
  const imc = (weight / heightSquared);
  return imc;
}

/* function main() {
  const imc = calcImc(FIXED_WEIGHT, FIXED_HEIGHT);
  console.log(`IMC: ${imc.toFixed(2)}`);
}
main();  */

function main() {
  // const weight = readline.questionFloat('What is your weight?');
  // const height = readline.questionInt('What is your height?');
  const imc = calcImc(weight, height);
}
main();
