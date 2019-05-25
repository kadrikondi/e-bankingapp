const account = require('../models/account')
const user = require('../models/user')
const nodemailer = require('node-mailer')

//create account number
exports.createAccountNumber = async (req, res) => {
    user.findOne({_id:req.params.id}, (err, user) => {
        if(err){
            console.log(err)
        }
        else{
            account.create(req.body, (err, account)=>{
                if(err){
                    console.log(err)
                }
                else{
                    const info = user.account
                    user.acct_no = account.acct_no
                    account.acct_name = user.acct_name
                    info.push(account)
                    user.save()
                    res.json({message:`Successful!`,info:account})
                    // var transport = nodemailer.createTransport({
                    // service:'Gmail',
                    // auth:{
                    //     user:'otitojuoluwapelumi@gmail.com',
                    //     pass:''
                    // }
                    // })
                    // var mailOptions = {
                    // from:'otitojuoluwapelumi@gmail.com',
                    // to:user.email,
                    // subject:'Account number',
                    // html:'<p>Dear, '+user.name +' your account number is '+account.acct_no +'</p>'
                    // }
                    // transport.sendMail(mailOptions, (err) => {
                    // if (err) {
                    //     res.status(403).json({
                    //         message:'Request failed, please try again'
                    //     })
                    // }
                    // else{
                    //     res.status(200).json({
                    //         message:'Mail sent successfully '
                    //     })
                    // }
                    
                    // })
                }
            })
        }
    })
}

//update account amount
// exports.updateAccountAmount = async (req, res) => {
//     user.findOne({_id:req.params.id}, (err, user) => {
//         if(err){
//             console.log(err)
//         }
//         else{
//             account.findOneAndUpdate(req.body.acct_no, async (err, account)=>{
//                 if(err){
//                     console.log(err)
//                 }
//                 else{
//                     var deposit_money = req.body.amount
//                     var new_bal = account.amount + deposit_money
//                     account.amount = new_bal || account.amount
//                     await account.save()
//                     res.status(200).json({
//                         message:'account updated'
//                     })
//                 }
//             })
//         }
//     })
// }
exports.updateAccountAmount = async (req, res) => {
    const info = await account.findOne({_id:req.params.id})
    if(!info){
        res.status(403).json({
            message:'Account user not found'
        })
    }
    else{
        var deposit_money = req.body.balance
        console.log(deposit_money)
        var new_bal = (info.balance + parseInt(deposit_money))
        info.balance = new_bal || info.balance
        await info.save()
        res.status(200).json({
            message:'account updated'
        })
    }
}

//generate account number 
exports.generateAccountNumber = async (req, res) => {
    const random_number = Math.floor(Math.random() * 1000000000) + 0000000000
    const acct = '9' + random_number
    var acct_exist = await user.findOne({acct_no:acct})
    if(acct.length === 9) {
        var added = Math.floor(Math.random() *10)
        var increased = acct + added
        console.log('account number was maximize to 10')
        res.status(200).json({
            acct_no:increased
        })
    }
    else if(acct.length < 9) {
        res.status(403).json({
            message:'Account number is less than 10'
        })
    }
    else if(acct.length > 10) {
        res.status(403).json({
            message:'Account number is greater than 10'
        })
    }
    else if(acct_exist){
        res.status(403).json({
            message:'This account number exist'
        })
    }
    else{
        res.status(200).json({
            acct_no:acct
        })
    }
}

//update account by admin
exports.updateAccount = async (req, res) => {
    const info = await account.findOne({_id:req.params.id})
    if(!info){
        res.status(403).json({
            message:'Account not valid'
        })
    }
    else{
        info.pin = req.body.pin || info.pin
        info.status = req.body.status || info.status
        info.type = req.body.type || info.type
        await info.save()
        res.status(200).json({
            message:'Account updated',
            info:info
        })
    }
}

//change pin 
exports.changePin = async (req, res) => {
    const info = await account.findOne({acct_no:req.params.acct_no})
    if(!info){
        res.status(403).json({
            message:'Account not valid'
        })
    }
    else{
        info.pin = req.body.pin || info.pin
        await info.save()
        res.status(200).json({
            message:'Pin has been changed',
            info:info
        })
    }
}