import express from 'express';
import bcrystjs from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';

import { generateToken, isAuth } from '../utils/utils.js';
import User from '../models/userModel.js';
import Order from '../models/orderModel.js';


const orderRouter = express.Router();

orderRouter.post('/',
  isAuth,
  expressAsyncHandler( async (req, res, next) => {
    const newOrder = new Order({
      orderItems: req.body.orderItems.map((item) => ({ ...item, product: item._id})),
      shippingAddress: req.body.shippingAddress,
      paymentMethod: req.body.paymentMethod,
      itemsPrice: req.body.itemsPrice,
      shippingPrice: req.body.shippingPrice,
      taxPrice: req.body.taxPrice,
      totalPrice: req.body.totalPrice,
      user: req.user._id,

    })

    const order = await newOrder.save()
    res.status(201).send({ message: 'Se ha creado una nueva order', order })
  })
)


orderRouter.get('/:id',
  isAuth,
  expressAsyncHandler( async (req, res, next) => {
    console.log(req.params)
    const order = await Order.findById({ _id: req.params.id })

    if (order) {
      res.status(200).json({ order })
    } else {
      res.status(401).send({ message: 'Orden de pago no encontrada.'})
    }


  })
)

export default orderRouter;