const express = require('express')
const router = express.Router()
const { catchErrors } = require('../handlers/errorHandler')
const accountcontrol = require('../controllers/account')
const usercontrol = require('../controllers/user')
const transactcontrol = require('../controllers/transaction')
const tranfer = require('../controllers/transfer')
const admin = require('../controllers/admin')

//account routes
router.get('/generate', accountcontrol.generateAccountNumber)
router.post('/acctno/:id', accountcontrol.createAccountNumber)
router.put('/acctamt/:id', catchErrors(accountcontrol.updateAccountAmount))
router.put('/update/acct/:id', catchErrors(accountcontrol.updateAccount))
router.put('/changepin/:acct_no', catchErrors(accountcontrol.changePin))
//admin routes
router.post('/register', admin.newAdmin)
router.post('/alogin', catchErrors(admin.loginAdmin))
router.get('/admin/:id', catchErrors(admin.getSingleAdmin))
router.get('/admindetails', catchErrors(admin.getAdminDetails))

//user routes
router.post('/create', usercontrol.createAccount)
router.post('/login', catchErrors(usercontrol.loginAccount))
router.get('/users/account', catchErrors(usercontrol.findUsersWithAccount))
router.get('/users/transaction', catchErrors(usercontrol.findUsersWithTransaction))
router.get('/user/acct/:id', catchErrors(usercontrol.getSingleUserWithAccount))
router.get('/user/transact/:id', catchErrors(usercontrol.getSingleUserTransacton))
router.get('/userdetails', catchErrors(usercontrol.getUserDetails))
router.get('/newusers', catchErrors(usercontrol.getNewUsers))
router.get('/users', catchErrors(usercontrol.getRegisteredUser))

//transaction routes
router.put('/send', transactcontrol.sendMoney)
router.post('/transaction/new/:id', catchErrors(transactcontrol.updateTransaction))
router.post('/new', transactcontrol.createTransact)
router.get('/alltrans', catchErrors(transactcontrol.getAllTransact))

//transfer routes
router.post('/search', catchErrors(tranfer.searchForAccountNumber))
router.put('/fund/', catchErrors(tranfer.transferFund))
module.exports = router;