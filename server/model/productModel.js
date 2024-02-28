const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    title: {type:String},
    price:{type:Number},
    category:{type:String},
    description:{type:String},
    image:{type:String},
    gender:{type:String},
    new:{type:Boolean},
    sale:{type:Boolean}
});

module.exports=mongoose.model('products',productSchema);