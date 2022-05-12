const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => res.json({ "message": "pong" }));

app.post('/ping', (_req, res) => {
  const { name } = req.body;
  return res.status(200).json({ "message": `Hello, ${name}!` });
})

app.listen(3000, () => console.log('ouvindo na porta 3000!'));