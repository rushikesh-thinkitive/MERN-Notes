const express = require('express')
const app = express()
const cookieParser = require('cookie-parser');
const cart = require('./routes/cart')

//Cookie Parser
app.use(cookieParser());

app.use('/cart',cart);

app.listen(3000,()=>{
    console.log("Listening on port 3000")
})