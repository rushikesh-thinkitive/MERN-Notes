const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const sequelize = require('./models/index');        // Did Connection with Database
const port = process.env.PORT || '3000';
const employee = require('./routes/employee')
// const home = require('./routes/home')

const Emp = require('./models/employee')



app.use(bodyParser.urlencoded({extended:false}));


// Emp.sync();             // Creating schema
app.use('/employee',employee);
// app.use('/home',home);

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

