const mongoose = require('mongoose')
const mongoDbErrorHandler = require('mongoose-mongodb-errors');

const userSchema = new mongoose.Schema({
    acct_name:String,
    id_card:String,
    fname:{type: String},
    lname:{type: String},
    email:{ type:String, unique:true},
    password:{ type: String},
    phone:{type:Number},
    gender:{type: String},
    photo:String,
    bdate:{ type: Date},
    is_active:{type: Boolean, default:true},
    address:{type: String},
    city: { type: String},
    state: {type: String},
    country: {type: String},
    acct_no:{type:String},
    id_photo:String,
    signature:String,
    bill:String,
    created_at: {type: Date, default:Date.now()},
    transaction: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'transaction'
    }],
    account: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'account'
    }]
})
userSchema.plugin(mongoDbErrorHandler)
module.exports = mongoose.model('user', userSchema)