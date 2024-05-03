const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cartoon = require('./routes/cartoon')

app.use(bodyParser.urlencoded({extended:false})) 
app.use('/cartoon',cartoon)


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})