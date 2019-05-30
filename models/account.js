const mongoose = require('mongoose')
const mongoDbErrorHandler = require('mongoose-mongodb-errors');
const Account = new mongoose.Schema({
    acct_name:String,
    acct_no:{type:Number, unique: true},
    type:String,
    balance: {type: Number, default:0.00},
    status:String,
    pin:{type:String},
    email:String,
    user:[{
        type: mongoose.Schema.Types.ObjectId, ref:'user'
    }]
})
Account.plugin(mongoDbErrorHandler)
module.exports = mongoose.model('account', Account)