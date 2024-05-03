const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const student = require('./routes/student')
const connectDB = require('./db/studentConnect')
const url = "mongodb://localhost:27017/Temp";

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

connectDB(url)
.then(response=>{
    console.log("Connected to Database");
})
app.use('/student',student)


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})