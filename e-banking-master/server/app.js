const app = require('express')()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', routes)

const port = 8080

mongoose.connect('mongodb://localhost:27017/EBanking', { useNewUrlParser: true })
.then( ()=>{
    app.listen(port, () => {
        console.log(`e-Banking is using ${port}`)
    }) 
})
.catch( err => console.log(err))