const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const userSchema = new Schema({
    name:{ type:String, required:true },
    mobile:{ type:Number, required:true },
    email:{ type:String, required:true },
    address:{ type:String, required:true },
    password:{ type:String, required:true },
    status:{ type:String, required:true }
});

const User = mongoose.model('User', userSchema);
module.exports = User;