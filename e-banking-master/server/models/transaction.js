const mongoose = require('mongoose')
const mongoDbErrorHandler = require('mongoose-mongodb-errors');
const Transaction = new mongoose.Schema({
    //note tx means transaction
    tx_no:Number,
    tx_type:String,
    amount:Number,
    date: {type: Date, default: Date.now()},
    recipient_acct: Number,
    sender:String,
    status:{type:Boolean, default:false},
    user:[{
        type: mongoose.Schema.Types.ObjectId, ref:'user'
    }]
})
Transaction.plugin(mongoDbErrorHandler)
module.exports = mongoose.model('transaction', Transaction)