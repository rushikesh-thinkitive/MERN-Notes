const express = require('express')
const session = require('express-session')
const app = express()
const employee = require('./routes/employee')


app.use(session({
    // name : "Session Ex1",
    secret: "iamkey",
    resave:false,
    saveUninitialized:true
}))
app.use('/session',employee)


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})
