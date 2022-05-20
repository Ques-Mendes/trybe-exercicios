const express = require('express');
const bodyParser = require('body-parser');
const middlewares = require('./middlewares');
const port = 3000;

const app = express();
app.use(bodyParser.json());

app.post('/user', middlewares.createUser);
app.get('/user', middlewares.getAllUsers);
app.get('/user/:id', middlewares.findUserById);
app.put('/user/:id', middlewares.updateUser);

app.use(middlewares.error);

app.listen(port, () => { 
  console.log(`listening on port ${port}`);
});