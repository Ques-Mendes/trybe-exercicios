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
    if (betNumber, number) {
        return 'Parabéns você ganhou!!!!'; 
    } return 'Tente novamente!!!';
    //return called(betNumber, number) ? 'Parabéns você ganhou!!!!' : 'Tente novamente!!!'; (Ternary Operator)
};
console.log(lotteryResult(8,checkNumber));

// Exercise 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checker = (rightAnswers, studentAnswers, selector) => {
  let counter = 0;
  for (let i = 0; i < rightAnswers.length; i += 1) {
    const selectorReturn = selector(rightAnswers[i], studentAnswers[i]);
    counter += selectorReturn;
  }
  return `Resultado final: ${counter} corretas`;
};

