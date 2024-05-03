const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    id: {type:Number, required:true, trim:true},
    rollno: {type:Number, required:true, trim:true},
    name: {type:String, required:true, trim:true},
    salary: {type:Number, required:true, trim:true},
    experties: {type:String, required:true, trim:true},
})

const Student = mongoose.model('mcastudent',studentSchema);

module.exports = Student;