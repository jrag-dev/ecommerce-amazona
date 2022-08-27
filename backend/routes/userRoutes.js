import express from 'express';
import bcrystjs from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';

import { generateToken } from '../utils/utils.js';
import User from '../models/userModel.js';


const userRouter = express.Router();


userRouter.post(
  '/signin', 
  expressAsyncHandler( async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrystjs.compareSync(req.body.password, user.password)) {
        const newUser = {
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
        }
        res.send({
          user: newUser,
          token: generateToken(user)
        });
        return;
      }
    }
    res.status(401).send({ message: 'Email o Password invalidos!'})
  })
);

userRouter.post(
  '/signup',
  expressAsyncHandler( async (req, res, next) => {
    const newuser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrystjs.hashSync(req.body.password)
    })

    const user = await newuser.save();

    res.send({
      user: user,
      token: generateToken(user)
    })

  })
)


export default userRouter;