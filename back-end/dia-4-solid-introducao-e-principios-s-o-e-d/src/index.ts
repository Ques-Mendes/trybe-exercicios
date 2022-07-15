import express from 'express';
import routers from './routers';

const app = express();

app.use(express.json());
app.use(routers);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}!`);  
});


