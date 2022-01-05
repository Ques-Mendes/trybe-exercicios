const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.reduce((acumulador, current) => acumulador.concat(current), []);
}
// console.log(flatten(arrays));