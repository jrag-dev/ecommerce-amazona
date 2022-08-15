import express from 'express';
import cors from 'cors';

import data from './data/data.js'

const app = express();


app.use(cors())


app.get('/api/products', (req, res) => {
  res.json(data.products);
})


const port = process.env.PORT || 4005;

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando por el puerto ${port}`)
})