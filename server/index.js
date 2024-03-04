const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');
dotenv.config();
const app=express();
const port=process.env.PORT || 3000;
const {userRouter}=require('./router/usersRouter');
const { productRouter } = require('./router/productsRouter');
const { contactRouter } = require('./router/messageRouter');

app.use(express.json());
app.use(cors());
app.use('/fashionshop/users',userRouter);
app.use('/fashionshop/products',productRouter);
app.use('/fashionshop/contact/',contactRouter)

mongoose.connect('mongodb://localhost:27017/fashionshop');

app.listen(port,()=>{
    console.log('Server je pokrenut na portu:'+port);
});