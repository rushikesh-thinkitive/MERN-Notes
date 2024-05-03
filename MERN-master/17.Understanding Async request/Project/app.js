const express = require('express')
const app = express()
const product = require('./routes/product')



app.use('/products',product)
app.listen(8000,()=>{
    console.log("Listening on port 8000")
})