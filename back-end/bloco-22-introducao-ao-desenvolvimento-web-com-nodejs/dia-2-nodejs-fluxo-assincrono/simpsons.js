const fs = require('fs').promises;

/* 
Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome. Por exemplo: 1 - Homer Simpson.
async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent);
  const contentValues = simpsons.map(({ id, name }) => `${id} - ${name}`);
  contentValues.forEach((contentValue) => console.log(contentValue));
}

function main() {
  readAll();  
}
main();  */

/*
Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
 async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);
  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }
  return chosenSimpson;
}

async function main() {
  const simpson = await getSimpsonById(4);
  console.log(simpson);
}

main(); */

/* Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
async function filterSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const newContent = simpsons.filter(simpson => simpson.id !== '10' && simpson.id !=='6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newContent));
}

async function main() {
  const simpson = await filterSimpsons();
  console.log(simpson);
}
main(); */

async function simpsonFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent);
  const familyIds = [1, 2, 3, 4];
  const simpsonFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonFamily));
}

async function main() {
  const simpson = await simpsonFamily();
  console.log(simpson);
}
main();