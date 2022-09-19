import express from 'express';
import cors from 'cors';
import path from 'path';

import dbConnect from './config/database.js';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';

const app = express();

// conección a la base de datos
dbConnect()

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/keys/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
})

app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/frontend/dist')))
app.get('*', (req, res) => 
  res.sendFile(path.join(__dirname, '/frontend/dist/index.html'))
)

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message })
})

const port = process.env.PORT || 4005;

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})