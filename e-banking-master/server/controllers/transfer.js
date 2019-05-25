const user = require('../models/user')
const account = require('../models/account')
const nodemailer = require('node-mailer')

//search for account number
exports.searchForAccountNumber = async (req, res) => {
    const info = await user.findOne({acct_no:req.body.acct_no})
    let acct_no = info.account[0]
    if(!info){
        res.json({message:'no user found'})
    }
    else if(!acct_no){
        res.json({message:'no account number found'})
    }
    else{
        res.json({info:info, acct:acct_no})
    }
}

//transfer fund
exports.transferFund = async (req, res) => {
    var pinIsValid = await account.findOne({pin:req.body.pin})
    if(!pinIsValid){
        res.json({message:'Wrong pin'})
    }
    else{
        const sender = await account.findOne({acct_no:req.body.sender})
        var pin = sender.pin
        var transfer_money = req.body.fund
        var max_transfer = transfer_money
        var deduct = sender.balance - parseInt(transfer_money)
        
        if(!sender){
            res.status(403).json({
                message:'please enter the sender account number'
            })
        }
        else if(deduct < 500){
            res.json({message:'Insuffient fund'})
        }
        
        else if(max_transfer > 100000){
            res.status(403).json({
                message:'you can not transfer above 100,000'
            })
        }
        else if(req.body.sender === req.body.receiver){
            res.status(403).json({message:'Invalid, you can not send money to yourself'})
        }
        else{
            sender.balance = deduct || sender.balance
            await sender.save()
            console.log(deduct)
            // var transport = nodemailer.createTransport({
            //     service:'Gmail',
            //     auth:{
            //         user:'otitojuoluwapelumi@gmail.com',
            //         pass:''
            //     }
            // })
            // var mailOptions = {
            //     from:'otitojuoluwapelumi@gmail.com',
            //     to:decode.email,
            //     subject:'Debit message',
            //     html:'<p>Dear, '+decode.sname +' your account has been debited with #'+transfer_money+ ` your bal: #${deduct}`+'</p>'
            // }
            // transport.sendMail(mailOptions, (err) => {
            //     if (err) {
            //         res.status(403).json({
            //             message:'Request failed, please check your acct balance'
            //         })
            //     }
            //     else{
            //         res.status(200).json({
            //             message:'A message has been sent to your email '
            //         })
            //     }
                
            // })
        
        
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
                console.log(info)
                // var transport = nodemailer.createTransport({
                //     service:'Gmail',
                //     auth:{
                //         user:'otitojuoluwapelumi@gmail.com',
                //         pass:''
                //     }
                // })
                // var mailOptions = {
                //     from:'otitojuoluwapelumi@gmail.com',
                //     to:decode.email,
                //     subject:'Credit alert',
                //     html:'<p>Your account has been credited with #, '+transfer_money + ` your bal: #${new_bal}`+'</p>'
                // }
                // transport.sendMail(mailOptions, (err) => {
                //     if (err) {
                //         res.status(403).json({
                //             message:'Request failed, please try again'
                //         })
                //     }
                //     else{
                //         res.status(200).json({
                //             message:'Transfer successful '
                //         })
                //     }
                    
                // })
            
                //console.log(info)
            }
        }
        
    }
   
    
}