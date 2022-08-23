import express from 'express';
import cors from 'cors';

import data from './data/data.js'
import dbConnect from './config/database.js';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';

const app = express();

// conección a la base de datos
dbConnect()

app.use(cors())

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter)


const port = process.env.PORT || 4005;

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando por el puerto ${port}`)
})