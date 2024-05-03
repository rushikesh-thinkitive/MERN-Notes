const express = require('express');
const app = express();
const student = require('./routes/student');
const teacher = require('./routes/teacher')
const bodyParser = require("body-parser");

const port = process.env.PORT || '3000';
app.use(bodyParser.urlencoded({extended:false}));

app.use('/student',student)
app.use('/teacher',teacher)

app.use('/getForm',(req,res)=>{
    let form = `<h1>Registration</h1>
     <form method="post" action='/student/insert'>
         <label for="name">Enter Name:</label><br>
         <input type="text" name="name" id="name"><br><br>
 
         <label for="email">Enter Email</label><br>
         <input type="email" name="email" id="name"><br><br>
 
         <input type="submit" value="Submit">
     </form>`;
    res.send(form)
})


app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})

