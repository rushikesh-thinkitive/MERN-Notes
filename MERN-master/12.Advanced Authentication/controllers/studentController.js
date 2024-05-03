const Student = require('../models/student');
const bcrypt = require('bcrypt');
const { log } = require('console');
const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY = "sdfsi283eudsfjhsdfb38ruhsdjkfskjfakjhdfi43wfsjkd";
const nodemailer = require('nodemailer');

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
        
        </form>
        <a href="/reset-password-form">Reset Password</a>
        `
        res.send(login_Form)
    }

    static authenticate = async (req,res)=>{
        let {student_username,student_password} = req.body
        // console.log(req.body)
        // console.log(student_email)
        console.log(student_username)
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

    static resetPasswordForm = (req,res)=>{
        let form = `<h2>Password Reset</h2>
        <form action="/student/send-reset-mail" method="post">
            <label for="email">Enter Your Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            
            <input type="submit" value="Reset Password">
        </form>`
        res.send(form);
    }

    static sendStudentResetPasswordEmail = async (req,res)=>{
        const {email } = req.body;
        if(email)
        {
            const user = await Student.findOne({email:email})
            console.log(user);
            if(user)
            {
                const secret = user._id + JWT_SECRET_KEY;
                const token = jwt.sign({userID:user._id},secret,{expiresIn:"15m"})
                const link = `http://localhost:3000/student/reset/${user._id}/${token}`
                console.log(link);

                // Sending Mail 

                const transporter = nodemailer.createTransport({
                service:'gmail',
                host: "smtp.gmail.com",
                port: 587,
                secure: false, // Use `true` for port 465, `false` for all other ports
                auth: {
                    user: "rushikeshkadu066@gmail.com",
                    pass: "tyfc advo xxgg mjoj ",
                },
                });

                // async..await is not allowed in global scope, must use a wrapper
                async function main() {
                // send mail with defined transport object
                const info = await transporter.sendMail({
                    from: 'rushikeshkadu066@gmail.com', // sender address
                    to: "rushikesh.kadu@thinkitive.com", // list of receivers
                    subject: "You have requested for password Reset ✔", // Subject line
                    text: "Reset Password", // plain text body
                    html: `<a href=${link}>Reset</a>`, // html body
                });

                console.log("Message sent: %s", info.messageId);
                // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
                }

                main().catch(console.error);



                res.send("<h1>Email Sent Successfully, plz check ur mail </h1>")
            }
        }
        else
        {
            res.send("Blank Field is not accepted")
        }
    }
    
    static resetConfirmPasswordForm = (req,res)=>{
        const {id,token} = req.params;
        console.log("Id:",id,"   token:",token)
        let form = `<h2>Enter New Password</h2>
        <form action="/student/user-password-reset/${id}/${token}" method="post">
            <label for="password">Enter Password:</label><br>
            <input type="password" id="password" name="password" required><br><br>

            <label for="password">Enter Confirm Password:</label><br>
            <input type="password" id="password" name="confirm_password" required><br><br>
            
            <input type="submit" value="Save Password">
        </form>
        `
        res.send(form)
    }

    static userPasswordReset = async(req,res)=>{
        console.log("Inside user password reset")
        const {password,confirm_password} = req.body;
        const {id,token} = req.params;
        console.log(token)
        const user = await Student.findById(id);
        const new_secret = user._id + JWT_SECRET_KEY;
        try{
            jwt.verify(token,new_secret);
            if(password && confirm_password)
            {
                if(password===confirm_password)
                {
                    const hashPassword = await bcrypt.hash(password,10)
                    await Student.findByIdAndUpdate(user._id,{$set:{password:hashPassword}})
                    res.send("<h1>Password Updated Successfully</h1>")
                    console.log("Reset Successfully")
                }
                else
                {
                    res.send("<h1>Password and confirm password does not match</h1>")
                }
            }
            else
            {
                res.send("<h1>Field should not be empty</h1>")
            }
        }
        catch(error)
        {
            console.log("Error:",error)
        }
    }
}



module.exports = studentController;