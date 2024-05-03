const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const student = require('./routes/student')
const connectDB = require('./db/connectDb');
const DBurl = 'mongodb://localhost:27017/student';

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

connectDB(DBurl)
.then(response=>{
    console.log("Connected to Database");
})

app.use('/student',student);


app.listen(3000,()=>{
    console.log("Listening on port 3000");
})