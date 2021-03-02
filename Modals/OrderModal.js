const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const orderSchema = new Schema({
    userid:{ type:String, required:true },
    date:{ type:Date, default: Date.now },
    prescription:{ type:String, required:true },
    status:{ type:String, required:true }
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;