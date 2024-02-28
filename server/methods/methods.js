const products=require('../model/productModel');

const getAll=async ()=>{
   const allProducts=await products.find({});
   return allProducts;
}

const getById=async(id)=>{
    const productByID=await products.findById(id);
    return productByID;
}

module.exports={getAll,getById}