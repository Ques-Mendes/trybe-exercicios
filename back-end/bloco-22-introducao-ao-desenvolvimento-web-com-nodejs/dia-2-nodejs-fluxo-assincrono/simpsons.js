const fs = require('fs').promises;
/* 
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

/* async function getSimpsonById(id) {
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
main();