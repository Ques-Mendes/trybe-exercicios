// escreva sum abaixo
const sum = (...numbers) => numbers.reduce(((acc, curr) => acc + curr), 0);
console.log(sum(2, 5, 9));