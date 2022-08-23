import express from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  const products = await Product.find();
  res.json( products )
})

productRouter.get('/slug/:slug', async (req, res) => {
  // const product = data.products.find(item => item.slug === req.params.slug);

  const product = await Product.findOne({ slug: req.params.slug })

  if (product) {
    res.json(product);
  }
  else {
    res.status(404).json({ message: 'Producto no encontrado.'})
  }
})


productRouter.get('/:id', async (req, res) => {
  // const product = data.products.find(item => item._id === req.params.id);

  const product = await Product.findById({ _id: req.params.id })

  if (product) {
    res.json(product);
  }
  else {
    res.status(404).json({ message: 'Producto no encontrado.'})
  }
})



export default productRouter;