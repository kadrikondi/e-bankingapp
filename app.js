<<<<<<< HEAD
const express = require('express')
    //const compression = require('compression')
=======
const os = require('os')
const cluster = require('cluster')

if(cluster.isMaster){
    //cluster master
    const n_cpus = os.cpus().length
    console.log(`Forking ${n_cpus} CPUS`)
    console.log(`Master is using ${process.pid} process`)
    for(let i=0; i < n_cpus; i++){
        cluster.fork()
    }
}
else {
    //cluster worker
    const express = require('express')
    const compression = require('compression')
>>>>>>> 0a2f43dfc1435990c64e2042795862bf5874d9e5
    const bodyParser = require('body-parser')
    const mongoose = require('mongoose')
    const morgan = require('morgan')
    const app = express();
<<<<<<< HEAD
    //app.use(compression())
=======
    app.use(compression())
>>>>>>> 0a2f43dfc1435990c64e2042795862bf5874d9e5
    const routes = require('./routes/routes')
    const path = require('path')
    //const pid = process.pid
    //app.use(morgan('dev')) // install morgan
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use('/', routes)

    if (process.env.NODE_ENV === 'production') {
        app.use(express.static(path.resolve(__dirname, 'client/build')))
        app.use(express.static(path.resolve(__dirname, 'build', 'index.html')))

        app.get('*', (req, res) => {
            // for(let i = 0; i < 2e6; i++){

            // }
            // console.log(`Process ${pid} is here`)
            res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
        })
    }
    // app.use((req, res, next) => {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    //     res.header("x-forward-for")
    //     next()
    //   })
    const port = process.env.PORT || 9000;


    app.listen(port, () => {
        if (process.env.NODE_ENV === 'production') {
            mongoose.connect('mongodb+srv://yakubebank:kadzee222.@cluster0-opegc.mongodb.net/test?retryWrites=true&w=majority', {
                    useNewUrlParser: true
                })
                .then(() => {

                    console.log(`Yakub e-banking server is using running on ${port}`)
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            mongoose.connect('mongodb://localhost:27017/EBanking', {
                    useNewUrlParser: true
                })
                .then(() => {

                    console.log("mongodb connected offline")
                })
                .catch((err) => {
                    console.log(err)
                })

        }
        console.log(`Yakub e-banking server is running on ${port}`)
    })
// const os = require('os')
// const cluster = require('cluster')

// if(cluster.isMaster){
//     //cluster master
//     const n_cpus = os.cpus().length
//     console.log(`Forking ${n_cpus} CPUS`)
//     console.log(`Master is using ${process.pid} process`)
//     for(let i=0; i < n_cpus; i++){
//         cluster.fork()
//     }
// }
// else {
    //cluster worker
    // const express = require('express')
    // //const compression = require('compression')
    // const bodyParser = require('body-parser')
    // const mongoose = require('mongoose')
    // const morgan = require('morgan')
    // const app = express();
    // //app.use(compression())
    // const routes = require('./routes/routes')
    // const path = require('path')
    // const pid = process.pid
    // app.use(morgan('dev')) // install morgan
    // app.use(bodyParser.json())
    // app.use(bodyParser.urlencoded({extended:true}))
    // app.use('/', routes)

    // if (process.env.NODE_ENV === 'production') {
    //     app.use(express.static(path.resolve(__dirname, 'client/build')))
    //     app.use(express.static(path.resolve(__dirname, 'build', 'index.html')))

    //     app.get('*', (req, res) => {
    //         for(let i = 0; i < 2e6; i++){

    //         }
    //         console.log(`Process ${pid} is here`)
    //         res.sendFile(path.resolve(__dirname, 'client/build/index.html'))
    //     })
    // }
    // app.use((req, res, next) => {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    //     res.header("x-forward-for")
    //     next()
    //   })
    // const port = process.env.PORT || 9000;


    // app.listen(port, () => {
    //     if (process.env.NODE_ENV === 'production') {
    //         mongoose.connect('mongodb+srv://yakubebank:kadzee222.@cluster0-opegc.mongodb.net/test?retryWrites=true&w=majority', {
    //                 useNewUrlParser: true
    //             })
    //             .then(() => {

    //                 console.log(`Yakub e-banking server is using ${pid} process running on ${port}`)
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })
    //     } else {
    //         mongoose.connect('mongodb://localhost:27017/EBanking', {
    //                 useNewUrlParser: true
    //             })
    //             .then(() => {

    //                 console.log("mongodb connected offline")
    //             })
    //             .catch((err) => {
    //                 console.log(err)
    //             })

    //     }
    //     console.log(`Yakub e-banking server is using ${pid} process running on ${port}`)
    // })
    // cluster.on('exit', (worker) => {
    //     console.log(`Alert: worker, ${worker.id} is no more`)
    //     cluster.fork()
    // })
// }

// cluster.on('exit', (worker) => {
//     console.log(`Alert: worker, ${worker.id} is no more`)
//     cluster.fork()
// })