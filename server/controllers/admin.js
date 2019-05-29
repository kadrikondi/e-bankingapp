const admin = require('../models/admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const auth = require('../config/config')
//register controller
exports.newAdmin = async (req, res) => {
    const body = req.body
    if(!body.sname || !body.lname || !body.password || !body.email){
        res.status(403).json({
            message:'fill all input fields'
        })
    }
    else{
        const hashed = bcrypt.hashSync(req.body.password, 10)
        const info = await admin.create(req.body)
        info.password = hashed
        await info.save()
        res.status(200).json({
            message:'successful'
        })
    }
}

//login controller
exports.loginAdmin = async (req, res) => {
    if(!req.body.email || !req.body.password){
        res.status(403).json({
            message:'fill all fields'
        })
    }
    else{
        await admin.findOne({email: req.body.email}, (err, admin) => {
            if(err){
                console.log(err)
                res.status(500).json({message:'Unable to log in'})
            }
            else if(!admin){
                res.status(403).json({message:'Invalid email'})
            }
            else{
                isPassword = bcrypt.compareSync(req.body.password, admin.password)
                if(!isPassword) {
                    res.status(401).json({
                        message:'wrong password'
                    })
                }
                else{
                    var token = jwt.sign({id:admin.id,email:admin.email,sname:admin.sname,lname:admin.lname}, auth.admintin, {expiresIn:'24h'})
                     
                    res.status(200).json({
                        message:'Login successful',
                        token:token,
                        success:true
                    })
                }
            }
        })
    }
}

//single admin controller
exports.getSingleAdmin = async (req, res) => {
    const info = await admin.find().sort({'_id':-1})
    res.status(200).json({info:info})
}

//admin details
exports.getAdminDetails = async (req, res) => {
    const token = await req.headers['authorization'].split(" ")[1];
    const decode = await jwt.verify(token, auth.admintin)
    let sname = await decode.sname
    let id = await decode.id
    let lname = decode.lname
    //let pic = decode.pic
    let email = decode.email
    res.json({
        id:id,
        email:email,
        sname:sname,
        lname:lname
        //pic:pic
    })
}