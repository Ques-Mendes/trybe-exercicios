const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.get('/ping', function(req, res) {
  res.json({ message: 'pong' })
});


// const PORT = process.env(3000);
app.listen(3000, () => console.log('listening on port 3000!'));