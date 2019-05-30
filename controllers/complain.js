const complain = require('../models/complain')

exports.postNewComplain = async (req, res) => {
    if(!req.body.text){
        res.json({message:'please wirte something'})
    }
    else{
        const info = await complain.create(req.body)
        res.json({message:'Message sent'})
    }
}

//get all
exports.getAllComplains = async (req, res) => {
    const info = await complain.find({}).sort({"_id":-1})
    res.json({infoo:info})
}
