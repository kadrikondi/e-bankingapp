const account = require('../models/account')
const user = require('../models/user')
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs')

//create account number
exports.createAccountNumber = async (req, res) => {
    user.findOne({_id:req.params.id}, async (err, user) => {
        if(err){
            console.log(err)
        }
        else{
            const acctExist = await account.findOne({acct_no:req.body.acct_no})
            if(acctExist){
                res.json({message:'Account number has been used'})
            }
            else{
                await account.create({acct_no:req.body.acct_no, email:user.email,acct_name:user.acct_name}, async (err, account)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        //req.body.email = user.email
                        const info = user.account
                        user.acct_no = account.acct_no
                        //account.acct_name = user.acct_nam
                        info.push(account)
                        user.save()
                        //res.json({message:`Successful!`,info:account})
                        var transport = nodemailer.createTransport({
                        service:'Gmail',
                        auth:{
                            user:'yakubebank@gmail.com',
                            pass:'kadzee222..@'
                        }
                        })
                        var mailOptions = {
                        from:'yakubebank@gmail.com',
                        to:user.email,
                        subject:'Account number',
                        html:'<p>Dear, '+user.fname +' your account number is '+account.acct_no +'</p>'
                        }
                        transport.sendMail(mailOptions, (err) => {
                        if (err) {
                            res.status(403).json({
                                message:'Request failed, please try again'
                            })
                        }
                        else{
                            res.status(200).json({
                                message:' account number generated & Mail sent successfully '
                            })
                        }
                        
                        })
                    }
                })
            }
            
        }
    })
}


//send money
exports.updateAccountAmount = async (req, res) => {
    const info = await account.findOne({_id:req.params.id})
    if(!info){
        res.status(403).json({
            message:'Account user not found'
        })
    }
    else{
        var deposit_money = req.body.balance
        //console.log(deposit_money)
        var new_bal = (info.balance + parseInt(deposit_money))
        info.balance = new_bal || info.balance
        await info.save()
        var transport = nodemailer.createTransport({
            service:'Gmail',
            auth:{
                user:'yakubebank@gmail.com',
                pass:'kadzee222..@'
            }
        })
        var mailOptions = {
            from:'yakubebank@gmail.com',
            to:info.email,
            subject:'Credit alert',
            html:'<p>Dear '+info.acct_name +',your account has been credited ' +  'with #'+ req.body.balance+'. Your new balance is #'+info.balance+'</p>'
        }
        transport.sendMail(mailOptions, (err) => {
            if (err) {
                res.status(403).json({
                    message:'Request failed, please check your acct balance'
                })
            }
            else{
                res.status(200).json({
                    message:'account updated'
                })
            }
            
        })
    }
}
//withdrawal controller
exports.withdrawAmount = async (req, res) => {
    const info = await account.findOne({_id:req.params.id})
    if(!info){
        res.status(403).json({
            message:'Account user not found'
        })
    }
    else{
        var withdraw_money = req.body.balance
        if(info.amount < 500 || withdraw_money > 500){
            res.json({message:'Insufficient fund'})
        }
        else{
            
        console.log(withdraw_money)
        var new_bal = (info.balance - parseInt(withdraw_money))
        info.balance = new_bal || info.balance
        await info.save()
        res.status(200).json({
            message:'withdrawal successful'
        })
        }
        
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
    if(!req.body.pin){
        res.json({message:'please enter pin'})
    }
    else if(isNaN(req.body.pin)){
        res.json({message:'Pin must be number'})
    }
    else if(req.body.pin.length > 4 || req.body.pin.length < 4){
        res.json({message:'Pin must be 4 numbers'})
    }
    else{
        const info = await account.findOne({acct_no:req.params.acct_no})
        if(!info){
            res.status(403).json({
                message:'Account not valid'
            })
        }
        else{
            const hash = bcrypt.hashSync(req.body.pin,10)
            info.pin = hash || info.pin
            await info.save()
            res.status(200).json({
                message:'Pin has created',
                info:info
            })
        }
    }
    
}

//delete account
exports.deleteAccount = async (req, res) => {
    const info = await account.findOneAndDelete({acct_no:req.body.acct_no})
    res.json({message:'account deleted'})
}