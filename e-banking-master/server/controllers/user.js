const user = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const nodemailer = require('node-mailer')
const auth = require('../config/config')

//create an account
exports.createAccount = async (req, res) => {
    const body = req.body
    const emailExist = user.findOne({email:req.body.email})
    //validations
    if(!body.fname || !body.lname || !body.password || !body.phone || !body.bdate || !body.gender || !body.address || !body.city || !body.state || !body.country || !body.id_card){
        res.status(403).json({
            message:'please fill all input fields',
            success:false
        })
    }
    // else if(emailExist){
    //     res.status(403).json({
    //         message:'Email already exist, please use another email',
    //         success:false
    //     })
    // }
    else if(body.fname.length > 25){
        res.status(403).json({
            message:'firstname is too long',
            success:false
        })
    }
    else if(body.lname.length > 25){
        res.status(403).json({
            message:'lastname is too long',
            success:false
        })
    }
    else if(body.phone.length > 11){
        res.status(403).json({
            message:'phone number is too long',
            success:false
        })
    }
    else if(body.password.length > 10){
        res.status(403).json({
            message:'password must not be more than 8 characters',
            success:false
        })
    }
    else{
        const hashed = bcrypt.hashSync(req.body.password, 10)
        const info = await user.create(req.body)
        info.acct_name = body.fname +' '+ body.lname
        info.password = hashed
        await info.save()
        res.json({message:'processing your account...', info:info})
        // var transport = nodemailer.createTransport({
        //     service:'Gmail',
        //     auth:{
        //         user:'otitojuoluwapelumi@gmail.com',
        //         pass:''
        //     }
        // })
        // var mailOptions = {
        //     from:'otitojuoluwapelumi@gmail.com',
        //     to:req.body.email,
        //     subject:'Welcome message',
        //     html:'<p>Dear, '+req.body.surname +'thank you for creating account with us, please wait while we verify your details and your account will be completed. please check your email later for your account number. Thank you. '+'</p>'
        // }
        // transport.sendMail(mailOptions, (err) => {
        //     if (err) {
        //         res.status(403).json({
        //             message:'Request failed, please try again'
        //         })
        //     }
        //     else{
        //         res.status(200).json({
        //             message:'A message has been sent to your email '
        //         })
        //     }
            
        // })
    }


}

//log into your account
exports.loginAccount = async (req, res) => {
    //user log in with account number and password
    if(!req.body.acct_no || !req.body.password){
        res.status(403).json({
            message:'please fill all required field'
        })
    }
    else{
        user.findOne({acct_no:req.body.acct_no}, (err, user) => {
            if (err){
                res.status(500).json({
                    message:'Unable to login'
                })
            }
            else if(!user){
                res.status(401).json({
                    message:`Invalid account number`
                })
            }
            else{
                isUserPassword = bcrypt.compareSync(req.body.password, user.password)
                if(!isUserPassword) {
                    res.status(401).json({
                        message:'wrong password'
                    })
                }
                else{
                    var token = jwt.sign({id:user.id,email:user.email,fname:user.fname,lname:user.lname,bdate:user.bdate, acct_no:user.acct_no, phone:user.phone,id_card:user.id_card}, auth.user, {expiresIn:'24h'})
                     
                    res.status(200).json({
                        message:'Login successful',
                        token:token,
                        succcess:true
                    })
                }
            }
        })
    }
}

//get all users with account
exports.findUsersWithAccount = async(req, res) => {
    const info = await user.find().populate('account').sort({"_id":-1})
    res.status(200).json({
        info:info
    })
}
//get all users with transaction
exports.findUsersWithTransaction = async (req, res) => {
    const info = await user.find().populate('transaction').sort({"_id":-1})
    res.status(200).json({
        info:info
    })
}

//get single user with account details
exports.getSingleUserWithAccount = async (req, res) => {
    user.findById(req.params.id).populate("account").exec(function (err, account) {
        if (err) {
            console.log(err);
        } else {
            const acct_details = account.account
            res.json({info:account, account:acct_details})
        }
    });
}

//get all transactions details
exports.getSingleUserTransacton = async (req, res) => {
    user.findById(req.params.id).populate('transaction').exec(function(err, transaction){
        if(err){
            console.log(err)
        }
        else{
            const transactions = transaction.transaction
            res.json({
                info:transaction,
                transaction:transactions
            })
        }
    })
}

//user details
exports.getUserDetails = async (req, res) => {
    const token = await req.headers['authorization'].split(" ")[1];
    const decode = await jwt.verify(token, auth.user)
    let fname = await decode.fname
    let id = await decode.id
    let lname = decode.lname
    let pic = decode.pic
    let acct = decode.acct_no
    
    res.json({
        id:id,
        acct:acct,
        fname:fname,
        lname:lname,
        pic:pic
    })
}

//new users
exports.getNewUsers = async (req, res) => {
    const users = await user.find({acct_no:null}).sort({"_id":1})
    res.json({info:users})
}

//get registered users
exports.getRegisteredUser = async (req, res) => {
    const info = await user.find({}).sort({"_id":-1})
    res.json({info:info})
}