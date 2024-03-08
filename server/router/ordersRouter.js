const express=require('express');
const { authenticateToken } = require('../auth/auth');
const { orderPost } = require('../controller/controller');
const ordersRouter=express.Router();

ordersRouter.post('/order',authenticateToken,orderPost);


module.exports={ordersRouter};