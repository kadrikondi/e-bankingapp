const user = require('../models/user')
const account = require('../models/account')
const nodemailer = require('nodemailer')
const bcrypt = require('bcryptjs')

//search for account number
exports.searchForAccountNumber = async (req, res) => {
    var account_no = req.body.acct_no.trim()
    if(!account_no){
        res.json({message:'please enter an account number'})
    }
    else{
        const info = await user.findOne({acct_no:account_no})
        if(!info){
            res.json({message:'No user account found'})
        }
        else{
            let acct_no = info.account[0]
            if(!acct_no){
                res.json({message:'Invalid account number'})
            }
            else{
                res.json({info:info, acct:acct_no})
            }
        }
        
    }
    
}

//transfer fund
exports.transferFund = async (req, res, next) => {
    if(!req.body.pin || !req.body.sender || !req.body.fund){
        res.status(403).json({message:'Enter all inputs'})
    }
    else if(isNaN(req.body.pin)){
        res.json({message:'Pin must be number'})
    }
    else if(isNaN(req.body.fund)){
        res.json({message:'Amount must be number'})
    }
    else if(isNaN(req.body.receiver)){
        res.json({message:'Account number must be number'})
    }
    else{
        const sender = await account.findOne({acct_no:req.body.sender})
        const pinIsValid = bcrypt.compareSync(req.body.pin, sender.pin)
        var transfer_money = req.body.fund
        var max_transfer = transfer_money
        var deduct = sender.balance - parseInt(transfer_money)
        
        if(!sender){
            res.status(403).json({
                message:'please enter the sender account number'
            })
        }
        else if(deduct < 10){
            res.json({message:'Insuffient fund'})
        }
        
        else if(max_transfer > 10000000){
            res.status(403).json({
                message:'you can not transfer above 100,000'
            })
        }
        else if(req.body.sender === req.body.receiver){
            res.status(403).json({message:'Invalid, you can not send money to yourself'})
        }
        else if(!pinIsValid){
            res.json({message:'Wrong pin'})
        }
        else{
            
            sender.balance = deduct || sender.balance
            await sender.save()
            //console.log(deduct)
            // res.json({message:'success'})
            // next()
            var transport = nodemailer.createTransport({
                service:'Gmail',
                auth:{
                    user:'yakubebank@gmail.com',
                    pass:'kadzee222..@'
                }
            })
            var mailOptions = {
                from:'yakubebank@gmail.com',
                to:sender.email,
                subject:'Debit alert',
                html:'<p>Dear, '+sender.acct_name +' your account has been debited with #'+transfer_money+ ` your bal: #${deduct}`+'</p>'
            }
            transport.sendMail(mailOptions, (err) => {
                if (err) {
                    res.status(403).json({
                        message:'Request failed, please check your acct balance'
                    })
                }
                // else{
                //     res.status(200).json({
                //         message:'A message has been sent to your email '
                //     })
                // }
                
            })
        
        
            const info = await account.findOne({acct_no:req.body.receiver})
            if(!info){
                res.status(403).json({
                    message:'Account user not found'
                })
            }
            else{
                //console.log(transfer_money)
                var new_bal = (info.balance + parseInt(transfer_money))
                info.balance = new_bal || info.balance
                await info.save()
                console.log(info.user.email)
                //res.json({message:'success'})
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
                    html:'<p>Your account has been credited with N'+transfer_money + ` your bal: #${new_bal}`+'</p>'
                }
                transport.sendMail(mailOptions, (err) => {
                    if (err) {
                        console.log(err.message)
                        res.status(403).json({
                            message:'Request failed, please try again'
                        })
                    }
                    else{
                        res.status(200).json({
                            message:'Transfer successful '
                        })
                    }
                    
                })
            
                //console.log(info)
            }
        }
        
    }
   
    
}