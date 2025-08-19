const UserModel =require('../model/UserModel');
const bcrypt =require('bcrypt');
const jwt =require('jsonwebtoken');
const blacklistTokenModel =require('../model/blacklistToken.model');

module.exports.authUser=async(req,res,next)=>{
    const token =req.cookies.token ||req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message:"unotorized"});
    }

    const isBlacklisted =await blacklistTokenModel.findOne({token});
    if(!isBlacklisted){
        return res.status(401).json({message:'unauthorized'})
    }
    try{
        
        const decoded =jwt.verify(token,process.env.JWT_SECRET);
        const user =await UserModel.findById(decoded._id)
        
        req.user =user;
        return next();
    }catch(err){
        return res.status(401).json({message:'unauthorized'});
    }

}


