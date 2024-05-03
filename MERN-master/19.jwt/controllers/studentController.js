const Student = require('../models/student');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret_key = "kjsdhf83r72190@jsdfjhbhbvoeioansjfslj";

class studentController{
    static get_Form = (req,res)=>{
       let form = `<h1>Registration Of Student</h1>
        <form method="post" action='/student/create'>
            <label for="username">Enter Username:</label><br>
            <input type="text" name="username" id=router.post('/create',studentController.save_Form)"username"><br><br>

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

            const student_doc = new Student({
                username:student_username,
                email:student_email,
                password:hashPassword,
            })

            const newStudent = await student_doc.save()
            res.json({status:"Student Registered Successfully"})
            // res.send("Student Registered Successfully");
        }
        catch(error){
            // console.log("Error Occured While Inserting Record:",error)
            res.json({"Error":error})
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
        console.log(student_username)
        const result =  await Student.findOne({email:student_username})
        if(result!=null)
        {
            const isMatch = await bcrypt.compare(student_password,result.password)
            if(result.email==student_username && isMatch)
            {
                const user = {
                    username : student_username,
                    password : student_password
                }

                const token = jwt.sign(user,secret_key,{expiresIn:'1h'});
                res.json(token);
                res.redirect(`http://localhost:3000/student/dashboard/${result.username}`)
            }
            else
                 res.send("<h1>Email or username is incorrect</h1>")
        }
        else
        {
            res.send("<h1>User is not registered</h1>")
        }
    }

    static dashboard = (req,res)=>{
        const token = req.headers.authorization.split(' ')[1]
        console.log("TOKEN:",token);
        jwt.verify(token,secret_key,(err,decodedToken)=>{
            if(err)
            {
                res.json({error:err})
            }
            else
            {
                let {username} = req.params;
                res.json({"user":decodedToken})
                // res.send(`<h1>Welcome ${username} <br> This is Dashboard`);
            }
        })
    }
}


module.exports = studentController;