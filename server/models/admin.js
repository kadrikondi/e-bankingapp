const mongoose = require('mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const Admin = new mongoose.Schema({
    sname:String,
    lname:String,
    email:String,
    password:String
})
Admin.plugin(mongodbErrorHandler)
module.exports = mongoose.model('admin', Admin)