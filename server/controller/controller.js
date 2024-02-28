const User=require('../model/userModel');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const { getAll, getById } = require('../methods/methods');



const register=async(req,res)=>{
    try{
    const {email,username,password}=req.body;
    let user=await User.findOne({email},{username});
    if(user!=null){
        res.status(403).json({message:'Korisnik pod istim email ili username vec postoji!'});
    }else{
        const hash=await bcrypt.hash(password,10);
        user=new User({email,username,password:hash,role:0});
        await user.save();
        res.status(200).json({message:'Korisnik je uspesno registrovan!'});
    }
    }catch(error){
        console.log(error);
    }
};

const login=async(req,res)=>{
    try{
        const {username,password}=req.body;
        let user=await User.findOne({username});
        if(user==null){
            res.status(403).json({message:'Nisu ispravni kredencijali!'});
        }else{
                const decrypt=bcrypt.compare(password,user.password,(err,result)=>{
                    if(err){
                        res.status(403).json({message:'Nisu ispravni kredencijali!cmd'});
                    }else{
                        const token=jwt.sign({userID:user._id},process.env.secretkey);
                        res.status(200).json({message:'Uspesno ste se ulogovali!',token:token});
                    }})}
    }catch(error){
        console.log(error);
    }
}

const getAllProducts=async(req,res)=>{
    const productsPromise=await getAll();
    await res.status(200).json(productsPromise)
}

const productID=async(req,res)=>{
    const id=req.body;
    const product=await getById(id);
    await res.status(200).json(product);
}


module.exports={
    register,login,getAllProducts,productID
}