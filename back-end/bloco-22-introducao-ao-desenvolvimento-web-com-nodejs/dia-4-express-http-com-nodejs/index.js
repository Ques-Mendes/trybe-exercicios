const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/ping', (req, res) => res.json({ "message": "pong" }));

app.post('/hello', (req, res) => {
  const { name } = req.body;
  console.log("test", name); // name is undefined ?
  return res.status(200).json({ "message": `Hello, ${name}!` });
}) 

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age, 10) <= 17) {
    return res.status(400).json({ message: `Unauthorized` });
  }  
  return res.status(200).json({ message: `Hello, ${name}!` });
});



app.listen(3000, () => console.log('ouvindo na porta 3000!'));