const express = require('express');
const { errorHandler } = require("./middlewares");
const app = express();
const port = 3000;
app.use(express.json());

app.use("/sales", require('./routes/sales'));

app.use(errorHandler);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))