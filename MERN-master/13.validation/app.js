const express = require('express')
const app = express()
const connectDb = require('./db/studentConnect');
const bodyParser = require('body-parser');
const student = require('./routes/student')


app.use(bodyParser.urlencoded({extended:false})) 
// Connecting with database
connectDb('mongodb://localhost:27017/Temp');                 // connect with Temp database

app.use('/student',student)


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})