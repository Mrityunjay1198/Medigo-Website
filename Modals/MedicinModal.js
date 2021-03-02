const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const medicinSchema = new Schema({
    name:{ type:String, required:true },
    content:{ type:String, required:true },
    type:{ type:String, required:true },
    price:{ type:Number, required:true },
    quantity:{ type:Number, required:true },
    image:{ type:String, required:true },
    status:{ type:String, required:true }
});

const Medicin = mongoose.model('Medicin', medicinSchema);
module.exports = Medicin;