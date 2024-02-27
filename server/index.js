const express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const cors=require('cors');
dotenv.config();
const app=express();
const port=process.env.PORT || 3000;
const {userRouter}=require('./routes/usersRouter');

app.use(express.json());
app.use(cors());
app.use('/fashionshop/users',userRouter);

mongoose.connect('mongodb://localhost:27017/fashionshop');

app.listen(port,()=>{
    console.log('Server je pokrenut na portu:'+port);
});