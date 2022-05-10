function main() {
  const imc = calcImc(FIXED_WEIGHT, FIXED_HEIGHT);
  console.log(`IMC: ${imc.toFixed(2)}`);
}

main();