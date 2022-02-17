// Crie uma função que gere um número aleatório
const randomNumber = () => Math.floor(Math.random() * 101);

// Crie três funções:
// Desenvolva a primeira função: essa função deve recebe uma string e retorná-la em caixa alta.
const firstF = (str) => str.toUpperCase();

// Crie a segunda função: ela recebe uma string e deve retornar só a primeira letra.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
const secondF = (str) => str.charAt(0);

// Elabore a terceira função: essa função deve receber duas strings e concatená-las.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/concat
const thirdF = (str1, str2) => str1.concat(str2);

// Crie uma função que faça requisição para a api dog pictures .
function fetchDog() {
  return fetch("https://dog.ceo/api/breeds/image/random")
   .then(response => response.json()
   .then(json => response.ok ? Promise.resolve(json) : Promise.reject(json)
   )
  );
}

module.exports = {
    randomNumber,
    firstF,
    secondF,
    thirdF,
    fetchDog,
};
