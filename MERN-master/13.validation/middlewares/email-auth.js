const validator = require('validator');
const Student = require('../models/student')

const emailAuth = async(req,res,next)=>{
    const {email} = req.body;
    // console.log("Inside EmailAuth Middleware");
    // console.log(email);

    const user = await Student.find({email:email})
    console.log(user)
    const userExist = user?false:true
    if(validator.isEmail(email) && userExist)
        next()
    else
    {
        res.send("Email already Exist")
        res.end()
    }
}

module.exports = emailAuth;