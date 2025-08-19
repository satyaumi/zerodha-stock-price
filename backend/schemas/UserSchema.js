const {Schema} =require('mongoose');

const UserSchema =new Schema({
     email:{
        type:String,
        required:[true,"fill the email adress"],
        unique:true,
     },
     username:{
        type:String,
        required:[true,"name is mandatory"]
     },
     password:{
        type:String,
        required:[true,'password must be required']
     },
     createAt:{
        type:Date,
        default:new Date(),
     },

});

module.exports ={UserSchema};