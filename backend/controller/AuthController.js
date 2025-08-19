// const {UserModel} =require('../model/UserModel');
// const {createSecretToken} =require('../util/SecretToken')
// const bcrypt =require('bcrypt');

// module.exports.Signup =async(req,res,next)=>{
//     try{
//         const {email,password,username,createAt} =req.body;
//         const existingUser =await User.findOne({email});
//         if(existingUser){
//             return res.json({message:"user already exist"})
//         }
//         const hashedPassword =await bcrypt.hash(password,10);
//         const user =await User.create({email,password:hashedPassword,username});
//         const token =createSecretToken(user._id);
//         res.cookie('token',token,{
//             withCredentials:true,
//             httpOnly:true,
//         });
//         res.status(201)
//             .json({message:"user signed in successfully",success:true,user});
//             next();
//     }catch(error){
//         console.log(error);
//         res.status(500).json({message:"server error"});
        
//     }
// };