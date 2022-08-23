import express from 'express';
import data from '../data/data.js';
import Product from '../models/productModel.js';



const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.remove({});
  const createdProducts = await Product.insertMany(data.products);
  res.json({ createdProducts });
})


export default seedRouter