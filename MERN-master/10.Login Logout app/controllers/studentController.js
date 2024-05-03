const connectDb = require('../db/studentConnect');
const mongoose = require('mongoose')
const studentSchema = require('../models/student');
const bcrypt = require('bcrypt');

class studentController{
    static get_Form = (req,res)=>{
    //    console.log("Inside Controller")
       let form = `<h1>Registration Of Student</h1>
        <form method="post" action='/student/create'>
            <label for="username">Enter Username:</label><br>
            <input type="text" name="username" id="username"><br><br>

            <label for="email">Enter Email:</label><br>
            <input type="email" name="email" id="email"><br><br>
            
            <label for="password">Enter Password:</label><br>
            <input type="password" name="password" id="password"><br><br>
            
            <input type="submit" value="Submit">
        
        </form>`
        res.send(form)
    }

    static save_Form = async (req,res)=>{
        const hashPassword = await bcrypt.hash(req.body.password,10)
        try{
            let {username:student_username,email:student_email,password:student_password} = req.body;
            console.log({student_username,student_email,student_password});
            let db = await connectDb();                 // connect with Temp database
            const Student = mongoose.model('student',studentSchema)      // define mongoose model for student collection
            studentSchema.index({ email: 1 }, { unique: true });

            const student_doc = new Student({
                username:student_username,
                email:student_email,
                password:hashPassword,
            })

            const newStudent = await student_doc.save()
            console.log(newStudent)
            res.send("Student Registered Successfully");
        }
        catch(error){
            console.log("Error Occured While Inserting Record:",error)
        }
    }

    static loginForm = (req,res)=>{
        let login_Form = `<h1>Login Form</h1>
        <form method="post" action='http://localhost:3000/student/authenticate'>
            <label for="username">Enter Email:</label><br>
            <input type="text" name="student_username" id="username"><br><br>

            <label for="password">Enter Password:</label><br>
            <input type="password" name="student_password" id="password"><br><br>
            
            <input type="submit" value="Login">
        
        </form>`
        res.send(login_Form)
    }

    static authenticate = async (req,res)=>{
        let {student_username,student_password} = req.body
        // console.log(req.body)
        // console.log(student_email)
        console.log(student_username)
        let db = await connectDb();  
        const Student = mongoose.model('student',studentSchema) 
        const result =  await Student.findOne({email:student_username})
        const isMatch = await bcrypt.compare(student_password,result.password)
        console.log(result)
        if(result!=null)
        {
            if(result.email==student_username && isMatch)
                 res.redirect(`http://localhost:3000/student/dashboard/${result.username}`)
            else
                 res.send("<h1>Email or username is incorrect</h1>")
        }
        else
        {
            res.send("<h1>User is not registered</h1>")
        }
    }

    static dashboard = (req,res)=>{
        let {username} = req.params;
        res.send(`<h1>Welcome ${username} <br> This is Dashboard`);
    }
}


module.exports = studentController;