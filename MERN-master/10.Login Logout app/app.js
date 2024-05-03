const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const student = require('./routes/student')


app.use(bodyParser.urlencoded({extended:false})) 
app.use('/student',student)


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})