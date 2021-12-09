// Exercise 1
const employeeRegister = (fullName) => {
    const email = fullName.toLowerCase();
    return { fullName, email: `${email}@trybe.com`};
};

const newEmployees = (called) => {
  const employees = {
    id1: called('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: called('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: called('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};
console.log(newEmployees(employeeRegister));

// Exercise 2
const checkNumber = (betNumber, drawnNumber) => betNumber === drawnNumber;
const lotteryResult = (betNumber, called) => {
    const number = Math.floor(Math.random() * 5);
    return called(betNumber, number) ? 'Parabéns você ganhou!!!!' : 'Tente novamente!!!';
};
console.log(lotteryResult(6,checkNumber));