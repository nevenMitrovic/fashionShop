const express=require('express');
const { getAllProducts, productID } = require('../controller/controller');
const productRouter=express.Router();

productRouter.get('/getAllProducts',getAllProducts);
productRouter.get('/getByID',productID);

module.exports={productRouter}