const fs = require('fs');

async function getSimpsons() {
  return await fs.readFile('./simpsons.json', 'utf-8');
}

module.exports = { getSimpsons }