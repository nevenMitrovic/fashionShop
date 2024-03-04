const express=require('express');
const {messagePost}=require('../controller/controller');
const { authenticateToken } = require('../auth/auth');
const contactRouter=express.Router();

contactRouter.get('/message',authenticateToken,messagePost)

module.exports={contactRouter};