    const express = require('express')
    const app = express()
    const bodyParser = require('body-parser')
    const movies = require('./routes/product')

    app.use(bodyParser.urlencoded({extended:false}))
    app.use('/products',movies);

    app.listen(3000,()=>{
        console.log("Listening on port 3000")
    })