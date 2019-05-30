const mongoose = require('mongoose')
const mongoDbErrorHandler = require('mongoose-mongodb-errors');
const Transaction = new mongoose.Schema({
    acct_name:{type:String, default:null},
    acct_no:{type:Number},
    tx_type:String,
    amount:Number,
    date: {type: Date, default: Date.now()},
    recipient_acct: Number,
    sender:{type:String, default:null},
    phone:{type:Number},
    user:[{
        type: mongoose.Schema.Types.ObjectId, ref:'user'
    }]
})
Transaction.plugin(mongoDbErrorHandler)
module.exports = mongoose.model('transaction', Transaction)