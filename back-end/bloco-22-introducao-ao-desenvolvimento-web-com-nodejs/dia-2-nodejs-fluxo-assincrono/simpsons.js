const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8')
  const simpsons = JSON.parse(fileContent);
  const contentValues = simpsons.map(({ id, name }) => `${id} - ${name}`);
  contentValues.forEach((contentValue) => console.log(contentValue));
}

function main() {
  readAll();
}

main();