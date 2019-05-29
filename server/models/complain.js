const mongoose = require('mongoose')
const mongodbErrorHandler =  require('mongoose-mongodb-errors')

const Complain = new mongoose.Schema({
    text:String,
    from:String,
    photo:String,
    phone:String,
    date:{type:Date, default:Date.now()}
})
Complain.plugin(mongodbErrorHandler)
module.exports = mongoose.model('complain', Complain)