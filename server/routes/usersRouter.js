const express=require('express');
const userRouter=express.Router();
const controller=require('../controller/controller');

userRouter.post('/register',controller.register);
userRouter.post('/login',controller.login);

module.exports={userRouter};