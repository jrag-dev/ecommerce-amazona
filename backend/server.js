import express from 'express';
import cors from 'cors';

import data from './data/data.js'
import dbConnect from './config/database.js';

const app = express();

// conección a la base de datos
dbConnect()


app.use(cors())


app.get('/api/products', (req, res) => {
  res.json(data.products);
})


app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find(item => item.slug === req.params.slug);

  if (product) {
    res.json(product);
  }
  else {
    res.status(404).json({ message: 'Producto no encontrado.'})
  }
})


app.get('/api/products/:id', (req, res) => {
  const product = data.products.find(item => item._id === req.params.id);

  if (product) {
    res.json(product);
  }
  else {
    res.status(404).json({ message: 'Producto no encontrado.'})
  }
})




const port = process.env.PORT || 4005;

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando por el puerto ${port}`)
})