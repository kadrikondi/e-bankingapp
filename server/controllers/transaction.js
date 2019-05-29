const transaction = require('../models/transaction')
const user = require('../models/user')
const account = require('../models/account')
//send money through the bank admin
exports.sendMoney = async (req, res) => {
    //first find the user with the account number
    //sender name
    //sender phone no
    //amount
    //recipient name
    //recipient acct no
    user.findOne({acct_name:req.body.acct_name, acct_no:req.body.acct_no}, (err, user) =>{
        if(err){
            res.json(err)
        }
        else{
            
        }
    })
    const info = await transaction.findOne({acct_name:req.body.acct_name, acct_no:req.body.acct_no})
    if(!info){
        res.status(403).json({
            message:'please check the account name'
        })
    }
    else{
        var deposit_money = req.body.amount
        var new_bal = info.amount + deposit_money
        info.amount = new_bal || info.amount
        await info.save()
        res.status(200).json({
            message:'account updated'
        })
    }

}

//update transaction
exports.updateTransaction = async (req, res) => {
    user.findOne({_id:req.params.id}, (err, user) => {
        if(err){
            console.log(err)
        }
        else{
            transaction.create(req.body, (err, success)=>{
                if(err){
                    console.log(err)
                }
                else{
                    //user.transaction.status = true
                    const transactions = user.transaction
                    transactions.push(success)
                    user.save()
                    res.json({message:`Transaction was successful`,info:success})
                }
            })
        }
    })
}

//create new transact
exports.createTransact = async (req, res) => {
    const User = await user.findOne({acct_name:req.body.acct_name})
    if(User){
        //console.log(User)
        const info = User.transaction
        const transact = await transaction.create(req.body)
        info.push(transact)
        User.save()
        //console.log(info)
        res.json({message:'success'})

    }
    else{
        res.json({message:'Invalid account holder'})
    }
}

//get all transactions
exports.getAllTransact = async (req, res) => {
    const info = await transaction.find().sort({"_id":-1})
    res.json({info:info})
}