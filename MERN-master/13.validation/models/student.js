const mongoose = require('mongoose')


// Define Schema 
let studentSchema = new mongoose.Schema({
    username : {type:String, required:true,trim:true},
    email :  {type:String, required:true,trim:true,unique:true},
    password :  {type:String, required:true,trim:true}
});

studentSchema.index({ email: 1 }, { unique: true });
const Student = mongoose.model('student',studentSchema)      // compiling schema for student collection

module.exports = Student;