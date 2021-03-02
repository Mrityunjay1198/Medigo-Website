const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const medicintypeSchema = new Schema({
    medicintype:{ type:String, required:true },
    status:{ type:String, required:true }
});

const MedicinType = mongoose.model('MedicinType', medicintypeSchema);
module.exports = MedicinType;