const express = require('express')
const router = express.Router()
const { catchErrors } = require('../handlers/errorHandler')
const accountcontrol = require('../controllers/account')
const usercontrol = require('../controllers/user')
const transactcontrol = require('../controllers/transaction')
const tranfer = require('../controllers/transfer')
const admin = require('../controllers/admin')
const cloudinary = require('cloudinary')
const multer = require('multer')
const nodemailer = require('nodemailer')
const config = require('../config/config')
const complain = require("../controllers/complain")
const emailExistence = require('email-existence')
const bcrypt = require('bcryptjs')

//cloudinary setup
cloudinary.config({
    cloud_name: config.cloud_name,
    api_key : config.api_key,
    api_secret : config.api_secret
})

//multer setup
const storage = multer.diskStorage({
    filename:function(req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
})
const imageFilter = function(req, file, cb){
    if(!file.originalname.match(/\.(jpeg|jpg|png)$/i)){
        return cb('Only image files are allowed', false)
    }
    else{
        cb(null,true)
    }
}
const upload = multer({
    storage:storage,
    fileFilter:imageFilter
})

//complains
router.post('/complain', complain.postNewComplain)
router.get('/complains', catchErrors(complain.getAllComplains))

//account routes
router.get('/generate', accountcontrol.generateAccountNumber)
router.post('/acctno/:id', accountcontrol.createAccountNumber)
router.put('/acctamt/:id', catchErrors(accountcontrol.updateAccountAmount))
router.put('/update/acct/:id', catchErrors(accountcontrol.updateAccount))
router.put('/changepin/:acct_no', catchErrors(accountcontrol.changePin))
router.delete('/del/account', catchErrors(accountcontrol.deleteAccount))
router.put('/withdraw/:id', catchErrors(accountcontrol.withdrawAmount))
//admin routes
router.post('/register', admin.newAdmin)
router.post('/alogin', catchErrors(admin.loginAdmin))
router.get('/admin/:id', catchErrors(admin.getSingleAdmin))
router.get('/admindetails', catchErrors(admin.getAdminDetails))

//user routes
const user = require('../models/user')
//router.post('/create', usercontrol.createAccount)
router.post('/login', catchErrors(usercontrol.loginAccount))
router.get('/users/account', catchErrors(usercontrol.findUsersWithAccount))
router.get('/users/transaction', catchErrors(usercontrol.findUsersWithTransaction))
router.get('/user/acct/:id', catchErrors(usercontrol.getSingleUserWithAccount))
router.get('/user/transact/:id', catchErrors(usercontrol.getSingleUserTransacton))
router.get('/userdetails', catchErrors(usercontrol.getUserDetails))
router.get('/newusers', catchErrors(usercontrol.getNewUsers))
router.get('/users', catchErrors(usercontrol.getRegisteredUser))
router.put('/edit/profile/:id', catchErrors(usercontrol.updateProfile))
router.delete('/del/user', catchErrors(usercontrol.deleteUser))
router.post('/close', catchErrors(usercontrol.findOneUser))
router.post('/create', upload.single('photo'), async(req, res) => {
    const body = req.body
    const emailExist = await user.findOne({email:req.body.email})
    //validations
    if(!body.fname || !body.lname || !body.password || !body.phone || !body.bdate || !body.gender || !body.address || !body.city || !body.state || !body.country || !body.id_card){
        res.json({
            message:'please fill all input fields',
            success:false
        })
    }

    else if(body.fname.length > 25){
        res.json({
            message:'firstname is too long',
            success:false
        })
    }
    else if(body.lname.length > 25){
        res.json({
            message:'lastname is too long',
            success:false
        })
    }
    else if(emailExist){
        res.json({
            message:'Email has been used',
            success:false
        })
    }
    else if(body.phone.length > 11){
        res.json({
            message:'phone number is too long',
            success:false
        })
    }
    else if(body.password.length < 8){
        res.json({
            message:'password must not be more than 8 characters',
            success:false
        })
    }
    else if(req.file == undefined || req.file == ''){
        res.json({message:`Error: No file selected`})
    }
    else{
        emailExistence.check(req.body.email, async function(error, response){
            console.log("res:" +response)
            if(response == false){
                res.json({message:'The email address you entered is invalid'})
            }else{
                var image = req.file.path
                const result = await cloudinary.uploader.upload(image)
                let imgUrl = result.secure_url
                const hashed = bcrypt.hashSync(req.body.password, 10)
                const info = await user.create(req.body)
                info.acct_name = body.fname +' '+ body.lname
                info.password = hashed
                info.photo = imgUrl
                await info.save()
                var id = info._id
                //res.json({message:'processing your account...', info:info, id:id})
                var transport = nodemailer.createTransport({
                    service:'Gmail',
                    auth:{
                        user:'yakubebank@gmail.com',
                        pass:'kadzee222..@'
                    }
                })
                var mailOptions = {
                    from:'yakubebank@gmail.com',
                    to:req.body.email,
                    subject:'Welcome Message',
                    html:'<p>Dear, '+req.body.fname +' thank you for creating account with us, please wait while we verify your details and your account will be completed. please check your email later for your account number. Thank you. ' +'</p>'+
                    '<ul><li>NOTE: If you receive an error message please visit this url http://localhost:3000'+'/nextform/'+info._id+ ' to complete your registration.'+'</li></ul>'
                }
                transport.sendMail(mailOptions, (err) => {
                    if (err) {
                        res.json({
                            message:'Error message: An error occured, please follow the url in the message sent to you to complete your registration.'
                        })
                    }
                    else{
                        res.json({
                            message:'processing your account..., check your email',
                            id:id
                        })
                    }
                    
                })
            }
        })
        
    }
})
//signature image
router.put('/signature/:id', upload.single('signature'), async(req, res) => {
    if(req.file == undefined || req.file == ''){
        res.json({message:`Error: No file selected`})
    }
    else{
            var image = req.file.path
            const result = await cloudinary.uploader.upload(image)
            const img =  result.original_filename
            let signatureUrl = result.secure_url
            let publicId = result.public_id
            const User = await user.findByIdAndUpdate(req.params.id, {signature:signatureUrl}, {new:true})
            res.json({
            user:User,
            message:'Success: Signature uploaded successfully',
            alert:'Registration completed, check your mail for your account number.'
            })
        
        
    }
})
//nepa bill image
router.put('/bill/:id', upload.single('bill'), async(req, res) => {
    if(req.file == undefined || req.file == ''){
        res.json({message:`Error: No file selected`})
    }
    else{
        
            var image = req.file.path
            const result = await cloudinary.uploader.upload(image)
            const img =  result.original_filename
            let billUrl = result.secure_url
            let publicId = result.public_id
            const User = await user.findByIdAndUpdate(req.params.id, {bill:billUrl}, {new:true})
            res.json({
            user:User,
            message:'Success: Nepa bill uploaded successfully'
            })
        
    }
})
//id card image
router.put('/idcard/:id', upload.single('id_photo'), async(req, res) => {
    if(req.file == undefined || req.file == ''){
        res.json({message:`Error: No file selected`})
    }
    else{
            var image = req.file.path
            const result = await cloudinary.uploader.upload(image)
            const img =  result.original_filename
            let idcardUrl = result.secure_url
            let publicId = result.public_id
            const User = await user.findByIdAndUpdate(req.params.id, {id_photo:idcardUrl}, {new:true})
            res.json({
            user:User,
            message:'Success: id card uploaded successfully'
            })
        
    }
})

//transaction routes
router.put('/send', transactcontrol.sendMoney)
router.post('/transaction/new/:id', catchErrors(transactcontrol.updateTransaction))
router.post('/new', transactcontrol.createTransact)
router.get('/alltrans', catchErrors(transactcontrol.getAllTransact))

//transfer routes
router.post('/search', catchErrors(tranfer.searchForAccountNumber))
router.put('/fund/', catchErrors(tranfer.transferFund))
module.exports = router;