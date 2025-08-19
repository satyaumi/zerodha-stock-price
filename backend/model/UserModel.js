const { model } = require('mongoose');
const { UserSchema} =require('../schemas/UserSchema')
const UserModel =new model('signup',UserSchema);

module.exports={UserModel};